import { ITeam } from '../../@types/team';
import { supabase } from '../../setupSupabase';

export async function getTeamById(id: number): Promise<ITeam> {
  const { data } = await supabase.from('teams').select('*').eq('id', id);
  if (!data) {
    return {} as ITeam;
  }
  return data[0];
}
