import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { students } from '../db';

@Injectable()
export class ValidStudent implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log('called')
        const { id } = req.params;
        const student = students.find(student => student.id === id);
        if(!student){
            throw new HttpException('Student not found', 404);
        }
        next();
    }
}