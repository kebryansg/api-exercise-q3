import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PositionService } from "./position.service";

@ApiTags('Positions')
@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionService.findOne(+id);
  }
}
