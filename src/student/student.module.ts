import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from 'src/student/student.service';
import { ValidStudent } from 'src/middleware/validStudent.middleware';

@Module({
    controllers: [StudentController],
    providers: [StudentService]
})

export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidStudent).forRoutes({
            path: 'students/:id',
            method: RequestMethod.GET
        });
        consumer.apply(ValidStudent).forRoutes({
            path: 'students/:id',
            method: RequestMethod.PUT
        });
    }
}
