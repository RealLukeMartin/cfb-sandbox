import { IRecord, IRecordsPaginationInputs } from '../../@types/record';
import { supabase } from '../../setupSupabase';

export async function getRecords(
  input: IRecordsPaginationInputs,
): Promise<IRecord[]> {
  const { page, offset, limit, teamId } = input;

  const { data } = await supabase
    .from('records')
    .select('*')
    .eq('teamId', teamId)
    .range(page + offset, limit - 1);

  return data as IRecord[];
}
