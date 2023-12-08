import { ITeam, ITeamsPaginationInputs } from '../../@types/team';
import { supabase } from '../../setupSupabase';

export interface ITeamsResponse {
  teams: ITeam[];
  count: number;
}

export async function getTeams(
  input: ITeamsPaginationInputs,
): Promise<ITeamsResponse> {
  const { page, offset, limit, team } = input;

  const startingRange = page * limit + offset;
  const pageOffset = 1 + page;
  const endingRange = pageOffset * limit + offset;

  const baseQuery = supabase
    .from('teams')
    .select('*')
    .range(startingRange, endingRange - 1);

  const baseCountQuery = supabase
    .from('teams')
    .select('id', { count: 'exact' });

  if (!team) {
    const { data } = await baseQuery;
    const { count } = await baseCountQuery;
    if (!count) {
      console.log('No Teams Found');
      return {
        teams: [
          {
            name: 'No Teams Found',
            conference: '',
            city: '',
            state: '',
            logos: [
              'https://plus.unsplash.com/premium_photo-1685089027812-6885c06b0fbf',
            ],
          },
        ] as ITeam[],
        count: 1,
      };
    }
    return {
      teams: data as ITeam[],
      count,
    };
  }

  const { data } = await baseQuery.textSearch('name', team.replace(' ', ','));
  const { count } = await baseCountQuery.textSearch(
    'name',
    team.replace(' ', ','),
  );

  if (!count) {
    console.log('No Teams Found');
    return {
      teams: [
        {
          id: 0,
          name: 'No Teams Found',
          conference: '',
          city: '',
          state: '',
          logos: [
            'https://plus.unsplash.com/premium_photo-1685089027812-6885c06b0fbf',
          ],
        },
      ] as ITeam[],
      count: 1,
    };
  }

  return {
    teams: data as ITeam[],
    count,
  };
}
