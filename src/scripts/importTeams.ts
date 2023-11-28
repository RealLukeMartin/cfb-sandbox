import { ICfbApiTeam, ITeam } from '../@types/team';
import { getTeams } from '../services/cfbApi';
import { supabase } from '../setupSupabase';

async function importTeams() {
  // Get all the teams
  const teams = await getTeams();

  // Convert the teams to the format we want
  const sanitizedTeams = teams
    .filter((team: ICfbApiTeam) => {
      const { school, conference, classification } = team;

      return school && conference && classification;
    })
    .map((team: ICfbApiTeam): Partial<ITeam> => {
      const { school, conference, classification } = team;

      return {
        name: school,
        conference,
        class: classification,
      };
    });

  console.log('sanitizedTeams', JSON.stringify(sanitizedTeams));
  // Insert the teams into the database
  const { data } = await supabase.from('team').insert(sanitizedTeams).select();
  console.log('data', JSON.stringify(data));

  return data;
}

importTeams()
  .then((data) => {
    console.log('done');
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
