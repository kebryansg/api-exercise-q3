import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePlayerDto } from "./dto/create-player.dto";
import { UpdatePlayerDto } from "./dto/update-player.dto";
import { Player } from "./entities/player.entity";
import { Player as IPlayer } from "./interfaces/player.interface";

@Injectable()
export class PlayerService {

  constructor(@InjectRepository(Player)
              private playerRepository: Repository<Player>) {
  }

  create(createPlayerDto: CreatePlayerDto) {
    return this.playerRepository.save(createPlayerDto);
  }

  findAll(idAuthor: number) {
    return this.playerRepository.find({
      where: { idAuthor }
    });
  }

  findByName(idAuthor: number, querySearch: string) {
    return this.playerRepository.createQueryBuilder("player")
      .where("player.id-author = :author AND (LOWER(player.`first-name`) LIKE(:search) OR LOWER(player.`last-name`) LIKE(:search))")
      .setParameters({
        author: idAuthor,
        search: `%${querySearch}%`
      })
      .select("player.*")
      .getRawMany()
      .then(data => {
        return data.map(item => {
          return {
            id: item["id"],
            firstName: item["first-name"],
            lastName: item["last-name"],
            image: item["image"],
            attack: item["attack"],
            defense: item["defense"],
            skills: item["skills"],

            idAuthor: item["id-author"],
            idPosition: item["id-position"]
          } as IPlayer;

        });
      });
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
