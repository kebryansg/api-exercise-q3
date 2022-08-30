import { Player } from "../interfaces/player.interface";

interface CreatePlayer extends Omit<Player, "id"> {

}

export class CreatePlayerDto implements CreatePlayer {
  firstName: string;

  lastName: string;

  image: string;

  attack: number;

  defense: number;

  skills: number;

  idAuthor: number;

  idPosition: number;
}
