import { ITeam } from '../../@types/team';
import { IPaginationInputs } from '../../@types/utils';
import { supabase } from '../../setupSupabase';

export async function getTeams(input: IPaginationInputs): Promise<ITeam[]> {
  const { page, offset, limit, search } = input;

  if (!search) {
    const { data } = await supabase
      .from('team')
      .select('*')
      .range(page + offset, limit);

    return data as ITeam[];
  }

  const { data } = await supabase
    .from('team')
    .select('*')
    .textSearch('name', search)
    .range(offset, limit);

  return data as ITeam[];
}
