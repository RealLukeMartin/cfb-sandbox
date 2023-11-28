import 'dotenv/config';

const {
  CFBD_API_KEY = '',
  CFBD_API_URL = 'https://api.collegefootballdata.com',
  PORT = 4000,
  SB_API_KEY = '',
  SB_API_URL = '',
} = process.env;

export const config = {
  cfbd: {
    apiKey: CFBD_API_KEY,
    apiUrl: CFBD_API_URL,
  },
  port: PORT,
  supabase: {
    apiKey: SB_API_KEY,
    apiUrl: SB_API_URL,
  },
};
