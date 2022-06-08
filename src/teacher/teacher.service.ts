import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { TeacherDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers;

    getTeachers(): TeacherDto[]{
        return this.teachers
    }

    getTeacherById(id: string): TeacherDto{
        return this.teachers.find(teacher => teacher.id === id);
    }
}
