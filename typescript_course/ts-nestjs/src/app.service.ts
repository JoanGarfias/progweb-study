import { Injectable } from '@nestjs/common';
import { Person } from './interface/Person';

@Injectable()
export class AppService {
  person: Person[] = [
    {
      id: 1,
      name: 'Pepe',
      email: 'pepekq@gmail.com',
      age: 30,
    },
    {
      id: 2,
      name: 'Sech',
      email: 'potaxio@hotmail.com',
      age: 39,
    },
  ];
  getPerson(): Person[] {
    return this.person;
  }

  deletePerson(email: string): boolean {
    const personaABorrarIndex = this.person.findIndex((p) => p.email === email);
    return personaABorrarIndex !== -1;
  }

  addPerson(person: Person): boolean {
    this.person.push(person);
    console.log(person);
    return true;
  }

  modifyPerson(id: number, pEdit: Person): boolean {
      const personIndex = this.person.findIndex((p) => p.id === id);
      if(personIndex !== -1){
        this.person[personIndex] = pEdit;
        console.log(this.person);
        return true;
      }
      else{
        return false;
      }
  }
}
