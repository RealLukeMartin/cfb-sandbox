import { IPaginationInputs } from './utils';

export interface ICfbApiTeam {
  id: number;
  school: string;
  mascot: string;
  abbreviation: string;
  alt_name1: string | null;
  alt_name2: string | null;
  alt_name3: string | null;
  conference: UAC;
  classification: string;
  color: string;
  alt_color: string | null;
  logos: string[];
  twitter: string;
  location: {
    venue_id: number;
    name: string;
    city: string;
    state: string;
    zip: string;
    country_code: string;
    timezone: string;
    latitude: number;
    longitude: number;
    elevation: string;
    capacity: number;
    year_constructed: number;
    grass: boolean;
    dome: boolean;
  };
}

export interface ITeam {
  cfbId: number;
  city: string;
  class: string;
  colors: string[];
  conference: string;
  created_at: string;
  id: number;
  latitude: number;
  logos: string[];
  longitude: number;
  mascot: string;
  name: string;
  state: string;
}

export interface ITeamsPaginationInputs extends IPaginationInputs {
  team?: string;
}
