import { Module } from '@nestjs/common';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { TeacherStudentModule } from '../teacher-student/teacher-student.module';


@Module({
  imports: [TeacherModule, StudentModule, TeacherStudentModule],
})

export class AppModule {}
