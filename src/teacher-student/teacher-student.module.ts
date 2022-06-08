import { Module } from '@nestjs/common';
import { TeacherStudentController } from './teacher-student.controller';
import { TeacherStudentService } from './teacher-student.service';
import { StudentService } from 'src/student/student.service';

@Module({
    controllers: [TeacherStudentController],
    providers: [TeacherStudentService, StudentService]
})

export class TeacherStudentModule {}
