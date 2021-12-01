import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Strange' },
      { id: 12, name: 'Captain America' },
      { id: 13, name: 'Captain Marvel' },
      { id: 14, name: 'Iron Man' },
      { id: 15, name: 'Black Panther' },
      { id: 16, name: 'Mr Fantastic' },
      { id: 17, name: 'Magneto' },
      { id: 18, name: 'Cyclops' },
      { id: 19, name: 'Scarlet Witch' },
      { id: 20, name: 'Vision' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
