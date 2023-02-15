import { Component } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  //  onKeyUp(payload: string) {
  //   //var target = payload.target as HTMLInputElement;
  //   console.log(payload );
  //  }

  hero: Hero | null = null;
  powers: string[] = ['Genius', "Invisibility", "Magician" , "Strength"]

  onSubmit() {
    console.log(this.hero);
  }

  constructor() {
    this.hero = new Hero(1,"Mr.Fantastic", "Genius", "Reed Richards");
  }

  reset() {
    this.hero = new Hero(1,"","","");
  }

}
