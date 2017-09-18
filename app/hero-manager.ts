import { Hero } from './hero';
import { Power } from './power';

export class HeroManager {
  allHeroes : Hero[] = [];

   powerList : Power[] = [
    {id: 1, name: 'Flight', description: 'Fly through the air at high speeds'},
    {id: 2, name: 'Invisibility', description: 'Turn invisible'},
    {id: 3, name: 'Super Speed', description: 'Run really fast'},
    {id: 4, name: 'Electric', description: 'Bend electricity at will'},
    {id: 5, name: 'Heat Vision', description: 'Shoot hot eye lasers'},
  ]


  populateList(){
    this.allHeroes.push(
    { id: 1, name: 'Mr. Nice', powers: [this.powerList[0], this.powerList[1]]},
    { id: 2, name: 'Narco', powers: [this.powerList[2], this.powerList[0]] },
    { id: 3, name: 'Bombasto', powers: [this.powerList[4], this.powerList[2]] },
    { id: 4, name: 'Celeritas', powers: [this.powerList[1], this.powerList[4]] },
    { id: 5, name: 'Magneta', powers: [this.powerList[3], this.powerList[0]] },
    { id: 6, name: 'RubberMan', powers: [this.powerList[1], this.powerList[2]] },
    { id: 7, name: 'Dynama', powers: [this.powerList[0], this.powerList[1]] },
    { id: 8, name: 'Dr IQ', powers: [this.powerList[4], this.powerList[0]] },
    { id: 9, name: 'Magma', powers: [this.powerList[4], this.powerList[2]] },
    { id: 10, name: 'Tornado', powers: [this.powerList[2], this.powerList[1]] });
  }

  addHero(id: 0, name: string, powers: Power[]){
      this.allHeroes.push({id: id, name:name, powers:powers});
  }
}
