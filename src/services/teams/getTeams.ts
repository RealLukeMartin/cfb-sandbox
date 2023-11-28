import { ITeam } from '../../@types/team';
import { IPaginationInputs } from '../../@types/utils';
import { supabase } from '../../setupSupabase';

export async function getTeams(input: IPaginationInputs): Promise<ITeam[]> {
  const { page, offset, limit, search } = input;

  const baseQuery = supabase
    .from('team')
    .select('*')
    .range(page + offset, limit - 1);

  if (!search) {
    const { data } = await baseQuery;

    return data as ITeam[];
  }

  const { data } = await baseQuery.textSearch('name', search);

  return data as ITeam[];
}
