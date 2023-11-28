import 'dotenv/config';

const {
  CFBD_API_KEY = '',
  CFBD_API_URL = 'https://api.collegefootballdata.com',
  PORT = 4000,
} = process.env;

export const config = {
  cfbd: {
    apiKey: CFBD_API_KEY,
    apiUrl: CFBD_API_URL,
  },
  port: PORT,
};
