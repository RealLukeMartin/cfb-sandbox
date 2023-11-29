import { ITeam, ITeamsPaginationInputs } from '../../@types/team';
import { supabase } from '../../setupSupabase';

export async function getTeams(
  input: ITeamsPaginationInputs,
): Promise<ITeam[]> {
  const { page, offset, limit, team } = input;

  const baseQuery = supabase
    .from('teams')
    .select('*')
    .range(page + offset, limit - 1);

  if (!team) {
    const { data } = await baseQuery;

    return data as ITeam[];
  }

  const { data } = await baseQuery.textSearch('name', team);

  return data as ITeam[];
}
