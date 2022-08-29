import { Player } from "../interfaces/player.interface";

interface CreatePlayer extends Omit<Player, "id"> {
}

export class CreatePlayerDto {
}
