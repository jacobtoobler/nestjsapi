import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ExtinctAnimal} from '../models/extinct.animals.model'

@Injectable()
export class ExtinctAnimalService{
  constructor(@InjectModel('ExtinctAnimals') private readonly extinctAnimalModel: Model<ExtinctAnimal>){}
  async getAll(){
    return await this.extinctAnimalModel.find();
  }
  async add(animal){
    const createAnimal = new this.extinctAnimalModel(animal);
    await createAnimal.save();
  }
  async update(animal){
    await this.extinctAnimalModel.updateOne({ExtinctYear:animal.ExtinctYear},animal);
  }
  async delete(id){
    await this.extinctAnimalModel.deleteOne({_id :id});
  }
}