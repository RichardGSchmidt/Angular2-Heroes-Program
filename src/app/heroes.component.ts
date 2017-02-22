import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Router } from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit  
{ 
  
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router:Router){}

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  gotoDetails():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}