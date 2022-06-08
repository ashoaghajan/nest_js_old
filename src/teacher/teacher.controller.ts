import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { TeacherDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(
    private readonly teacherService: TeacherService
 ){}

  @Get()
  getTeachers(): TeacherDto[]{
      return this.teacherService.getTeachers();
  }

  @Get(':id')
  getTeacherById(
    @Param('id', ParseUUIDPipe) id: string
  ): TeacherDto{
      return this.teacherService.getTeacherById(id);
  }
}