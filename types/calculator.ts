export type Calculator = {
  paths: Path[];
  totalPoints: number;
};

export type Path = {
  id: string;
  name: string;
  talents: string[];
};

export type Loadout = {
  id: string;
  distribution: {
    [key: string]: number;
  };
};
