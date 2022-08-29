import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePlayerDto } from "./dto/create-player.dto";
import { UpdatePlayerDto } from "./dto/update-player.dto";
import { Player } from "./entities/player.entity";

@Injectable()
export class PlayerService {

  constructor(@InjectRepository(Player)
              private playerRepository: Repository<Player>) {
  }

  create(createPlayerDto: CreatePlayerDto) {
    return this.playerRepository.save(createPlayerDto);
  }

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: number) {
    return this.playerRepository.findBy({
      id
    });
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    await this.playerRepository.update(id, {
      ...updatePlayerDto
    });
    return {
      status: true,
      updateCode: id
    };
  }

  remove(id: number) {
    return this.playerRepository.delete(id);
  }
}
