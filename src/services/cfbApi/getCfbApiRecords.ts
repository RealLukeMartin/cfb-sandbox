import axios from 'axios';

import { ICfbApiRecord } from '../../@types/record';
import { config } from '../../config';

export async function getCfbApiRecords(team: string): Promise<ICfbApiRecord[]> {
  const { apiKey, apiUrl } = config.cfbd;

  const requestConfig = {
    headers: { Authorization: `Bearer ${apiKey}` },
    params: {
      team,
    },
  };

  let response: {
    data: ICfbApiRecord[];
  };

  try {
    response = await axios.get(`${apiUrl}/records`, requestConfig);
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }

  return response.data;
}
