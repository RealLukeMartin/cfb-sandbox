import { ICfbApiTeam, ITeam } from '../@types/team';
import { getCfbApiTeams } from '../services/cfbApi';
import { supabase } from '../setupSupabase';

async function importTeams() {
  // Get all the teams
  const teams = await getCfbApiTeams();

  // Filter out any teams that don't have the required fields
  // and convert the teams to the format we want
  const sanitizedTeams = teams
    .filter((team: ICfbApiTeam) => {
      const {
        classification,
        color,
        conference,
        id,
        location,
        logos,
        mascot,
        school,
      } = team;

      return (
        classification &&
        color &&
        conference &&
        id &&
        location &&
        location.city &&
        location.state &&
        location.latitude &&
        location.longitude &&
        logos &&
        logos.length > 0 &&
        mascot &&
        school
      );
    })
    .map((team: ICfbApiTeam): Partial<ITeam> => {
      const {
        alt_color,
        classification,
        color,
        conference,
        id,
        location,
        logos,
        mascot,
        school,
      } = team;

      const colors = [color];
      if (alt_color) {
        colors.push(alt_color);
      }
      return {
        cfbId: id,
        name: school,
        conference,
        class: classification,
        colors,
        logos,
        mascot,
        city: location.city,
        state: location.state,
        latitude: location.latitude,
        longitude: location.longitude,
      };
    });

  // Insert the teams into the database
  const { data, error } = await supabase
    .from('team')
    .insert(sanitizedTeams)
    .select();

  console.log(JSON.stringify(error));
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
