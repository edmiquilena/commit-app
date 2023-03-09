import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CommitsService } from "./commits.service";

@Controller("commits")
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  findAll() {
    return this.commitsService.findAll();
  }
}
