import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Fordi' },
      { id: 12, name: 'Yordi' },
      { id: 13, name: 'Yordy' },
      { id: 14, name: 'Jordine' },
      { id: 15, name: 'Jordy' },
      { id: 16, name: 'Geordi' },
      { id: 17, name: 'Geordie' },
      { id: 18, name: 'Iordi' },
      { id: 19, name: 'Iordie' },
      { id: 20, name: 'Iordy' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
