import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { StudentDto } from '../student/dto/student.dto';

@Injectable()
export class TeacherStudentService {
    private students = students;

    getTeacherStudents(id: string): StudentDto[]{
        return this.students.filter(student => student.teacher === id);
    }
}
