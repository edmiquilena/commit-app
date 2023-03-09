import { Controller, Get, BadRequestException } from "@nestjs/common";
import { CommitsService } from "./commits.service";

@Controller("commits")
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async findAll() {
    try {
      return await this.commitsService.findAll();
    } catch {
      throw new BadRequestException("Dang! something happened");
    }
  }
}
