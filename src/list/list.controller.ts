import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private readonly listservice: ListService) {}
  @Get()
  get() {
    return this.listservice.get();
  }
}
