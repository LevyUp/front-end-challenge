export type Calculator = {
  paths: Path[];
  totalPoints: number;
};

export type Path = {
  id: string;
  name: string;
  talents: Talent[];
};

export type Talent = {
  id: string;
  name: string;
  icon: string;
};

export type Loadout = {
  id: string;
  distribution: {
    [key: string]: number;
  };
};
