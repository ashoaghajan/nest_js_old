import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { CreateStudentDto, StudentDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    private students = students;
    
    getStudents(): StudentDto[]{
        return this.students
    }

    getStudentById(id: string): StudentDto{
        return this.students.find(student => student.id === id);
    }

    createStudent(body: CreateStudentDto): StudentDto{
        const newStudent = { ...body, id: uuid() };
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(id: string, body: UpdateStudentDto): StudentDto{
        const studentIndex = this.students.findIndex(student => student.id === id);
        if(studentIndex === -1){
            return undefined;
        }
        this.students[studentIndex] = { ...this.students[studentIndex], ...body };
        return this.students[studentIndex];
    }
}
