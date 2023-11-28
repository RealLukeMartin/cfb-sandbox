export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface IDatabase {
  public: {
    Tables: {
      team: {
        Row: {
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
        };
        Insert: {
          cfbId: number;
          city: string;
          class: string;
          colors: string[];
          conference: string;
          created_at?: string;
          id?: number;
          latitude: number;
          logos: string[];
          longitude: number;
          mascot: string;
          name: string;
          state: string;
        };
        Update: {
          cfbId?: number;
          city?: string;
          class?: string;
          colors?: string[];
          conference?: string;
          created_at?: string;
          id?: number;
          latitude?: number;
          logos?: string[];
          longitude?: number;
          mascot?: string;
          name?: string;
          state?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
