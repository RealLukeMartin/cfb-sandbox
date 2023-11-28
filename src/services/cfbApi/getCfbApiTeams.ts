import axios from 'axios';

import { ICfbApiTeam } from '../../@types/team';
import { config } from '../../config';

export async function getCfbApiTeams(): Promise<ICfbApiTeam[]> {
  const { apiKey, apiUrl } = config.cfbd;

  const requestConfig = {
    headers: { Authorization: `Bearer ${apiKey}` },
  };

  let response: {
    data: ICfbApiTeam[];
  };

  try {
    response = await axios.get(`${apiUrl}/teams`, requestConfig);
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }

  return response.data;
}
