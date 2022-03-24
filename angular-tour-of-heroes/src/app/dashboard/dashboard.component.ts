import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  displayHeroes: Hero[] = [];
  amount: string = "5";

  constructor(private heroService: HeroService, private mssgService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    this.updateList();
  }

  updateList(): void {
    let topAmt: number = parseInt(this.amount);
    if (!(topAmt > 0)) {
      topAmt = 5;
    }
    this.mssgService.add("Got top " + topAmt + " Heroes");
    this.displayHeroes = this.heroes.slice(0, topAmt);
  }

  getDisplayHeroes(): Hero[] {
    return this.displayHeroes;
  }

}
