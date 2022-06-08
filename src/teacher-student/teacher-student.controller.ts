import { Controller, Get, Param, Put, Body, ParseUUIDPipe } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentDto, UpdateStudentDto } from '../student/dto/student.dto';
import { TeacherStudentService } from './teacher-student.service';


@Controller('teachers/:teacherId/students')
export class TeacherStudentController {
  constructor(
    private readonly teacherStudentService: TeacherStudentService,
    private readonly studentService: StudentService
  ) {}

  @Get()
  getTeacherStudents(
    @Param('teacherId', ParseUUIDPipe) id: string
  ): StudentDto[]{
      return this.teacherStudentService.getTeacherStudents(id);
  }

  @Put(':studentId')
  updateTeacherStudent(
    @Param() params: { teacherId: string, studentId: string },
    @Body() body: UpdateStudentDto
  ): StudentDto{
      const { studentId } = params;
      return this.studentService.updateStudent(studentId, body);
  }
}