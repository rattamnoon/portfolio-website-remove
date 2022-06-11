const currentUrl =
  process.env.NODE_ENV === 'production' ? 'process' : 'http://localhost:3001';

export default currentUrl;
