export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  dateEvent?: String;
  qntPersons?: number;
  qntHours?: number;
  ambient?: boolean;
  obs?: string;
}
