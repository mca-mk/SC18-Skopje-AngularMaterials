import { Injectable } from '@angular/core';
import { Participant } from '../../models/participants';
import { Organiser } from '../../models/organiser';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  getParticipants(): Observable<Participant[]> {
    return of(PAX);
  }

  getOrganisers(): Observable<Organiser[]> {
    return of(ORG);
  }

  getOrganiser(id: number): Observable<Organiser> {
    return of(ORG.find( o => o.id === id));
  }

  getParticipant(id: number): Participant {
    return PAX.find( o => o.id === id);

  }

}











export const PAX: Participant[] = [
  { id: 1, name: '1 Ignacio Arqueros-Chevalier ', age: '7/13/1996', country: 'Spain', university: 'EPS Leganés', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 1, name: 'Dona Donatela', age: 19, country: 'Spain', university: 'UBC', picture:
  'https://i.pinimg.com/736x/dd/21/a5/dd21a5719f50d914faf50c7b01c00a7f--taylor-marie-hill-taylor-hill-face.jpg', gender: 'female' },

  { id: 2, name: 'Marko Busic', age: 21, country: 'Slovakia', university: 'USC', picture:
  'http://pngimg.com/uploads/face/face_PNG5660.png', gender: 'male' },
];



export const ORG: Organiser[] = [
    { id: 1, name: 'Marin', age: 20, university: 'FINKI', picture: 'https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160/p160x160/31670267_2170607396289571_1025346342962069504_n.jpg?_nc_cat=0&oh=e9a87f08123132b9c6c0908dc23e9e8c&oe=5B9F57A7', gender: 'male', memebershipStatus:'Fullmemeber', favouriteDrink:'beer' },

    { id: 2, name: 'Emil', age: 22, university: 'FINKI', picture: 'https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-9/13880403_10208797745254123_4102905551978165918_n.jpg?_nc_cat=0&oh=1a2a6ff0f745761397ff28ea9dd70131&oe=5BE6C4A8', gender: 'male', memebershipStatus:'Fullmemeber', favouriteDrink:'beer'  },

];

