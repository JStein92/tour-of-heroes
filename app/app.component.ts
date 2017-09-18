import { Component } from '@angular/core'
import { Hero } from './hero';
import { HeroManager } from './hero-manager';

let manager : HeroManager = new HeroManager;
manager.populateList();

@Component({
  selector: 'my-app',
  template: `
  <div class = 'container'>
  <div class = 'jumbotron'>
    <h1>{{title}}</h1>
  </div>

<div class = 'row'>
  <div class = 'col-md-6'>
  <form ng-submit = "submit()" class ='form-group'>

    <h3>Add a new hero</h3>
    <label for ='name'>Name:</label>
    <input type = 'text' ng-model="name" class ='form-control' required>

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
    <form-thing></form-thing>
    </div>
    </div>
  </div>
  `
})


export class AppComponent {
  title = 'Tour of Heroes';

  heroes = manager.allHeroes;
  selectedHero: Hero;
  allPowers = manager.powerList;

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

}

@Component({
  selector: 'form-thing',
  template:`<h2>I AM THE FORM</h2>`
})

export class HeroFormComponent {

  //model = new Hero(0, 'Batman', [manager.powerList[0], manager.powerList[1]]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}
