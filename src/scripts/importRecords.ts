import { ICfbApiRecord, IRecord } from '../@types/record';
import { delay } from '../helpers/utils';
import { getCfbApiRecords } from '../services/cfbApi/getCfbApiRecords';
import { getTeams } from '../services/teams';
import { supabase } from '../setupSupabase';

async function importRecords() {
  // Get all the teams
  const teams = await getTeams({
    limit: 135,
    offset: 0,
    page: 0,
  });

  const teamRecords = [] as ICfbApiRecord[][];
  for (let i = 0; i < teams.teams.length; i += 1) {
    const { name } = teams.teams[i];

    console.log(`Getting records for ${name}`);
    // eslint-disable-next-line no-await-in-loop
    const record = await getCfbApiRecords(name);

    // eslint-disable-next-line no-await-in-loop
    await delay(1000);

    teamRecords.push(record);
  }

  // Flatten the records,
  // we are doing this to convert from an array of arrays(grouped by teams) to a single array
  // of all year records
  const flattenedRecords = teamRecords.flat();

  // For each record, find the team that matches the record's team name
  // and then create a new entry in the array with teamId and record details
  const records = flattenedRecords.map((record): Partial<IRecord> => {
    const teamForThisRecord = teams.teams.find(
      (team) => team.name === record.team,
    );

    return {
      teamId: teamForThisRecord?.id,
      wins: record.total.wins,
      losses: record.total.losses,
      ties: record.total.ties,
      games: record.total.games,
      year: record.year,
      team: record.team,
    };
  });

  const { data, error } = await supabase
    .from('records')
    .insert(records)
    .select();

  console.log(JSON.stringify(error));
  return data;
}

importRecords()
  .then((data) => {
    console.log('done');
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
