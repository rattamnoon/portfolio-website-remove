import decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';

const PORTFOLIO_LOGIN = 'portfolio/login';

const checkAuth = (token, refreshToken) => {
  if (!token || !refreshToken) return { user: null };

  try {
    const { exp } = decode(refreshToken);
    const user = decode(token);

    if (exp < new Date().getTime() / 1000) {
      return { user: null };
    }

    return { user };
  } catch (e) {
    return { user: null };
  }
};

const initialState = {
  token: null,
  refreshToken: null,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PORTFOLIO_LOGIN: {
      const user = checkAuth(
        action.payloads.token,
        action.payloads.refreshToken,
      );

      return {
        ...state,
        token: action.payloads.token,
        refreshToken: action.payloads.refreshToken,
        user,
      };
    }

    default:
      return state;
  }
};

export default reducer;

export const login = (token, refreshToken) => ({
  type: PORTFOLIO_LOGIN,
  payloads: { token, refreshToken },
});
