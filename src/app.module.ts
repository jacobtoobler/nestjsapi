import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { ExtinctAnimalsController} from './ExtinctAnimals/extinct.animals.controller';
import { extinctAnimalSchema } from './ExtinctAnimals/schema/extinct.animal.schema';
import {ExtinctAnimalService} from './ExtinctAnimals/services/extinct.animal.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forFeature([{
      name:'ExtinctAnimals',
      schema:extinctAnimalSchema,
      collection:'ExtinctAnimals'
    }]),
    MongooseModule.forRoot("mongodb://localhost:27017/testdb"),
    AuthModule,
    UsersModule],
  controllers: [AppController,ExtinctAnimalsController],
  providers: [AppService,ExtinctAnimalService],
})
export class AppModule {}
