import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {id: 0, name: 'First Post', description: 'Description: 1', text: 'Text: 1'},
      {id: 1, name: 'Second Post', description: 'Description: 2', text: 'Text: 2'},
      {id: 2, name: 'Third Post', description: 'Description: 3', text: 'Text: 3'},
      {id: 3, name: 'Fourth Post', description: 'Description: 4', text: 'Text: 4'},
      {id: 4, name: 'Fifth Post', description: 'Description: 5', text: 'Text: 5'},
      {id: 5, name: 'Sixth Post', description: 'Description: 6', text: 'Text: 6'},
      {id: 6, name: 'Seventh Post', description: 'Description: 7', text: 'Text: 7'},
      {id: 7, name: 'Eighth Post', description: 'Description: 8', text: 'Text: 8'},
      {id: 8, name: 'Ninth Post', description: 'Description: 9', text: 'Text: 9'},
      {id: 9, name: 'Tenth Post', description: 'Description: 10', text: 'Text: 10'},
      {id: 10, name: 'Eleventh Post', description: 'Description: 11', text: 'Text: 11'},
      {id: 11, name: 'Twelth Post', description: 'Description: 12', text: 'Text: 12'},
      {id: 12, name: 'Thirteenth Post', description: 'Description: 13', text: 'Text: 13'},
      {id: 13, name: 'Fouteenth Post', description: 'Description: 14', text: 'Text: 14'},
      {id: 14, name: 'Fifteenth Post', description: 'Description: 15', text: 'Text: 15'},
      {id: 15, name: 'Sixteenth Post', description: 'Description: 16', text: 'Text: 16'}
    ];
    return {posts};
  }
}
