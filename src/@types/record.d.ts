import { IPaginationInputs } from './utils';

export interface ICfbApiRecord {
  year: number;
  teamId: number;
  team: string;
  conference: string;
  division: string;
  expectedWins: number;
  total: {
    games: number;
    wins: number;
    losses: number;
    ties: number;
  };
  conferenceGames: {
    games: number;
    wins: number;
    losses: number;
    ties: number;
  };
  homeGames: {
    games: number;
    wins: number;
    losses: number;
    ties: number;
  };
  awayGames: {
    games: number;
    wins: number;
    losses: number;
    ties: number;
  };
}

export interface IRecord {
  created_at: string;
  games: number;
  id: number;
  losses: number;
  teamId: number;
  wins: number;
  year: number;
  ties: number;
  team: string;
}

export interface IRecordsPaginationInputs extends IPaginationInputs {
  teamId: number;
}
