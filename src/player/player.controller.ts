import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { ApiHeader, ApiTags } from "@nestjs/swagger";
import { CreatePlayerDto } from "./dto/create-player.dto";
import { UpdatePlayerDto } from "./dto/update-player.dto";
import { PlayerService } from "./player.service";

@ApiTags("Player")
@Controller("player")
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {
  }

  @Get()
  @ApiHeader({
    name: "author",
    description: "Custom Author ID"
  })
  findAll(@Req() request: Request) {
    const author = request.headers["author"];
    return this.playerService.findAll(+author);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.playerService.findOne(+id);
  }

  @Post("/search")
  @ApiHeader({
    name: "author",
    description: "Custom Author ID"
  })
  findByName(@Req() request: Request, @Body() body: any) {
    const author = request.headers["author"];
    const { search } = body;
    return this.playerService.findByName(+author, search.toLowerCase());
  }

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Patch(":id")
  update(@Param("id") id: string,
         @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.playerService.remove(+id);
  }
}
