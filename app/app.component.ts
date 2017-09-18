import { Component } from '@angular/core'
import { Hero } from './hero';
import { Power } from './power';

const powerList: Power[] = [
  {id: 1, name: 'Flight', description: 'Fly through the air at high speeds'},
  {id: 2, name: 'Invisibility', description: 'Turn invisible'},
  {id: 3, name: 'Super Speed', description: 'Run really fast'},
  {id: 4, name: 'Electric', description: 'Bend electricity at will'},
  {id: 5, name: 'Heat Vision', description: 'Shoot hot eye lasers'},
]
const heroList: Hero[] = [
  { id: 1, name: 'Mr. Nice', powers: [powerList[0], powerList[1]]},
  { id: 2, name: 'Narco', powers: [powerList[2], powerList[0]] },
  { id: 3, name: 'Bombasto', powers: [powerList[4], powerList[2]] },
  { id: 4, name: 'Celeritas', powers: [powerList[1], powerList[4]] },
  { id: 5, name: 'Magneta', powers: [powerList[3], powerList[0]] },
  { id: 6, name: 'RubberMan', powers: [powerList[1], powerList[2]] },
  { id: 7, name: 'Dynama', powers: [powerList[0], powerList[1]] },
  { id: 8, name: 'Dr IQ', powers: [powerList[4], powerList[0]] },
  { id: 9, name: 'Magma', powers: [powerList[4], powerList[2]] },
  { id: 10, name: 'Tornado', powers: [powerList[2], powerList[1]] }
]

@Component({
  selector: 'my-app',
  template: `
  <div class = 'container'>
  <div class = 'jumbotron'>
    <h1>{{title}}</h1>
  </div>

<div class = 'row'>
  <div class = 'col-md-6'>
  <form id = 'newHero' class ='form-group'>

    <h3>Add a new hero</h3>
    <label for ='new-hero'>Name:</label>
    <input type = 'text' id = 'new-hero' class ='form-control' required>

    <label for ='new-hero'>Powers:</label>
    <select multiple class='form-control'>
      <option *ngFor="let power of allPowers">{{power.name}}</option>
    </select>

    <button type = 'submit' class = 'btn btn-success'>Add!</button>
  </form>
  </div>

  <div class = 'col-md-6'>
    <ul class = "heroes">
      <li *ngFor = "let hero of heroes" [class.selected]="hero === selectedHero"(click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    </div>
    </div>
  </div>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = heroList;
  selectedHero: Hero;
  allPowers = powerList;

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

}
