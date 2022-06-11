import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { gql, useMutation } from '@apollo/client';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { login as loginDispatch } from '../../redux/reducers/userReducer';

const mutate = gql`
  mutation ($input: UserInput!) {
    login(input: $input) {
      token
      refreshToken
    }
  }
`;

const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  console.log(user);

  const [login, { loading: loadingMutate }] = useMutation(mutate);
  const handleFormSubmit = async e => {
    e.preventDefault();
    if (!username || !password) {
      setErrorUsername(!username);
      setErrorPassword(!password);
    } else {
      await login({
        variables: { input: { username, password } },
      })
        .then(({ data }) => {
          const { token, refreshToken } = data.login;
          dispatch(loginDispatch(token, refreshToken));
          history('/dashboard');
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
  return (
    <div className="h-screen flex bg-[#0a192f]">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account
        </h1>

        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="username">Username</label>
            <input
              className={`w-full p-2 text-primary border ${
                errorUsername && 'border-red-500'
              } rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4s`}
              id="username"
              placeholder="Your Username"
              onChange={e => setUsername(e.target.value)}
            />
            {errorUsername && (
              <span className="text-red-600">กรุณากรอก username</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border ${
                errorPassword && 'border-red-500'
              } rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4s`}
              id="password"
              placeholder="Your Password"
              onChange={e => setPassword(e.target.value)}
            />
            {errorPassword && (
              <span className="text-red-600">กรุณากรอก password</span>
            )}
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className="h-10 px-10 font-semibold rounded-md bg-[#0a192f] text-white flex items-center justify-center"
              type="submit"
            >
              {loadingMutate && (
                <FaSpinner
                  icon="spinner"
                  className="spinner animate-spin h-5 w-5 mr-3"
                />
              )}
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
