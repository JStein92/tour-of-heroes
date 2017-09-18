import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        <ul>
          <li *ngFor="let power of hero.powers">{{power.name}}</li>
        </ul>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
