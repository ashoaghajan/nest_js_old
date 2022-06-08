import { Controller, Get, Param, Post, Put, Body, ParseUUIDPipe } from '@nestjs/common';
import { CreateStudentDto, StudentDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(
     private readonly studentService: StudentService
  ){}

  @Get()
  getStudents(): StudentDto[]{
      return this.studentService.getStudents();
  }

  @Get(':id')
  getStudentById(
    @Param('id', ParseUUIDPipe) id: string
  ): StudentDto|undefined{
      return this.studentService.getStudentById(id)
  }

  @Post()
  createStudent(
    @Body() body: CreateStudentDto
  ): StudentDto{
      return this.studentService.createStudent(body);
  }

  @Put(':id')
  updateStudent(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateStudentDto
  ): StudentDto|undefined{
      return this.studentService.updateStudent(id, body);
  }
}