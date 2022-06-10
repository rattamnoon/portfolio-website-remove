const currentUrl =
  process.env.NODE_ENV === 'production' ? 'process' : 'http://localhost:4000';

export default currentUrl;
