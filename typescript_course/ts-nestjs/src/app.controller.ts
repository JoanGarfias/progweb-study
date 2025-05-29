import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './interface/Person';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Person[] {
    return this.appService.getPerson();
  }

  @Delete()
  deletePerson(): boolean {
    return this.appService.deletePerson('pepekq@gmail.com');
  }

  @Post()
  addPerson(@Body() person: Person): boolean {
    return this.appService.addPerson(person);
  }

  @Post(':id')
  modifyPerson(@Param('id') id: number, @Body() person: Person): boolean {
    return this.appService.modifyPerson(Number(id), person);
  }
}
