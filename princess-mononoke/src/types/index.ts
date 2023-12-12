export type ICardFeature = {
  label: string;
  detail: string;
};

export interface ICardBodyProps {
  children?: React.ReactNode;
}

export interface ICardProps{
  data: IPerson;
  lang: ILang;
}

export interface ICardListProps {
  cards: ICardProps[];
}

const langs = ["en", "es"];

export type ILang = (typeof langs)[number];

export interface IPerson {
  id: string;
  name: string;
  img: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  specie: string;
}

export interface ILocation {
  id: string;
  name: string;
  img: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[]; // Puedes ajustar el tipo según lo que contenga residents
}

export interface IVehicle {
  id: string;
  name: string;
  img: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: IPerson;
}

export interface IMovie {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  poster: string;
  release_date: string;
  rt_score: string;
  people: IPerson[];
  locations: ILocation[];
  vehicles: IVehicle[];
}
