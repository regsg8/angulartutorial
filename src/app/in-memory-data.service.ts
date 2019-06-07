import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Iron Man' },
      { id: 12, name: 'Thor' },
      { id: 13, name: 'Vision' },
      { id: 14, name: 'Black Widow' },
      { id: 15, name: 'Bruce Banner' },
      { id: 16, name: 'Spiderman' },
      { id: 17, name: 'Captain America' },
      { id: 18, name: 'Hawkeye' },
      { id: 19, name: 'Scarlet Witch' },
      { id: 20, name: 'War Machine' },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
