import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Position } from "./entities/position.entity";

@Injectable()
export class PositionService {

  constructor(@InjectRepository(Position)
              private positionRepository: Repository<Position>) {
  }

  findAll() {
    return this.positionRepository.find();
  }

  findOne(id: number) {
    return this.positionRepository.findOne({ where: { id } });
  }
}
