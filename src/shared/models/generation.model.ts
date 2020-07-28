import { GameVersion } from './game-version.model';

export interface GenerationModel {
  name: string;
  capitalizeName: string;
  url: string;

  version_groups: GameVersion[]
}
