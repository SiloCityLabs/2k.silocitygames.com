type finishing2k25 = {
  close_shot: number;
  driving_layup: number;
  driving_dunk: number;
  standing_dunk: number;
  post_control: number;
};

type shooting2k25 = {
  mid_range_shot: number;
  three_point_shot: number;
  free_throw: number;
};

type playmaking2k25 = {
  pass_accuracy: number;
  ball_handle: number;
  speed_with_ball: number;
};

type defense2k25 = {
  interior_defense: number;
  perimeter_defense: number;
  steal: number;
  block: number;
};

type rebounding2k25 = {
  offensive_rebound: number;
  defensive_rebound: number;
};

type physicals2k25 = {
  speed: number;
  agility: number;
  strength: number;
  vertical: number;
};

export type Attributes2k25 = {
  finishing: finishing2k25;
  shooting: shooting2k25;
  playmaking: playmaking2k25;
  defense: defense2k25;
  rebounding: rebounding2k25;
  physicals: physicals2k25;
};

export interface MinMax {
  min: string;
  max: string;
}
