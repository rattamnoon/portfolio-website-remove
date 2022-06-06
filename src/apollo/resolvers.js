import moment from 'moment';

export const resolvers = {
  Query: {
    async getData(_parent, _args, context, _info) {
      try {
        console.log(moment().format('YYYY-MM-DD'));
        return 'test';
      } catch (err) {
        // throw new AuthenticationError(err);
        console.error('Unable to connect to the database:', err);
      }
    },
  },
};
