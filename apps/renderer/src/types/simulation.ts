export type WorldSize = 'small' | 'medium' | 'large' | 'epic';
export type ResourceRichness = 'arid' | 'normal' | 'abundant';
export type StartingEra = 'prehistory' | 'stone-age' | 'custom';

export interface SimulationBootConfig {
  initialHumans: number;
  worldSize: WorldSize;
  resources: ResourceRichness;
  disasters: boolean;
  mutations: boolean;
  era: StartingEra;
}
