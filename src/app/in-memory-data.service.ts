import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {id: 11, name: 'Mr. Nice', attack: 5},
      {id: 12, name: 'Narco', attack: 5},
      {id: 13, name: 'Bombasto', attack: 5},
      {id: 14, name: 'Celeritas', attack: 5},
      {id: 15, name: 'Magneta', attack: 5},
      {id: 16, name: 'RubberMan', attack: 5},
      {id: 17, name: 'Dynama', attack: 5},
      {id: 18, name: 'Dr IQ', attack: 5},
      {id: 19, name: 'Magma', attack: 5},
      {id: 20, name: 'Tornado', attack: 5}
    ];
    return {posts};
  }
}
