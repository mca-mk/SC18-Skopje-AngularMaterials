import { Injectable } from '@angular/core';
import { Participant } from '../../models/participants';
import { Organiser } from '../../models/organiser';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {

  orgLen = ORG.length;
  paxLen = PAX.length;

  constructor() { }

  getParticipants(): Observable<Participant[]> {
    return of(PAX);
  }

  getOrganisers(): Observable<Organiser[]> {
    return of(ORG);
  }

  getOrganiser(id: number): Observable<Organiser> {
    return of(ORG.find(o => o.id === id));
  }

  getParticipant(id: number): Observable<Participant> {
    return of(PAX.find(o => o.id === id));
  }

  addOrganiser(org: Organiser) {
    ORG.push(org);
  }

}











export const PAX: Participant[] = [
  {
    id: 1, name: 'Ignacio Arqueros-Chevalier ',
    age: 21,
    country: 'Spain',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-1/10292518_790977077600549_3935575125682531689_n.jpg?_nc_cat=0&oh=c6e8173ba51a7ec7aeeff89c1f91a6ea&oe=5BE6B170',
    gender: 'Male'
  },

  {
    id: 2,
    name: 'Tom Mahieu',
    age: 25,
    country: 'Belgium',
    university: 'Some university in Europe',
    picture:
      // tslint:disable-next-line:max-line-length
      'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-1/28661166_10216450371638899_4896481593749882299_n.jpg?_nc_cat=0&oh=4273f1f8d56bb8f8b458c3662ce7c38a&oe=5BB006ED',
    gender: 'Male'
  },

  {
    id: 3,
    name: 'Delia Burdea',
    age: 21,
    country: 'Roumania',
    university: 'Some university in Europe',
    picture: 'http://summer18.best.org.mk/images/participanti/burdea.jpg',
    gender: 'Female'
  },

  {
    id: 4,
    name: 'Tamara Takács',
    age: 22,
    country: 'Hungary',
    university: 'Some university in Europe',
    picture: 'http://summer18.best.org.mk/images/participanti/Tamara.jpg',
    gender: 'Female'
  },

  {
    id: 5,
    name: 'Simon Thyregod Kristensen',
    age: 24,
    country: 'Denmark',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/27067613_10210915297094153_2380960747524294859_n.jpg?_nc_cat=0&oh=577fbd7ad8e0a9d71ccf8472583e1a5d&oe=5BB0E76F',
    gender: 'Male'
  },

  {
    id: 6,
    name: 'Boglárka Timea Forgács',
    age: 23,
    country: 'Hungary',
    university: 'Some university in Europe',
    picture: 'http://summer18.best.org.mk/images/participanti/boglarka.jpg',
    gender: 'Female'
  },

  {
    id: 7,
    name: 'Jose Andres Cortes Martin',
    age: 23,
    country: 'Spain',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/16640583_1261186667291642_5313448699126638737_n.jpg?_nc_cat=0&oh=dc88acef25f5cd23a07c861c9e238629&oe=5BEB6F90',
    gender: 'Male'
  },

  {
    id: 8,
    name: 'Dragan Radu',
    age: 22,
    country: 'Romania',
    university: 'Some university in Europe',
    picture: 'http://summer18.best.org.mk/images/participanti/Radu.jpg',
    gender: 'Male'
  },

  {
    id: 9,
    name: 'Marko Gluhak',
    age: 20,
    country: 'Slovenia',
    university: 'Some university in Europe',
    picture: 'http://summer18.best.org.mk/images/participanti/marko.jpg',
    gender: 'Male'
  },

  {
    id: 10,
    name: 'Zeynep Dokuz',
    age: 20,
    country: 'Turkey',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/32207691_222155065213486_4563663052787941376_n.jpg?_nc_cat=0&oh=c5959749f21e998cd2bf73ea62a1047e&oe=5BE2DBB8',
    gender: 'Female'
  },

  {
    id: 11,
    name: 'Matheus Stiehler Alves',
    age: 20,
    country: 'Brazil',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/21270840_1599255553464171_6371456110793444423_n.jpg?_nc_cat=0&oh=eebe5a69a07f897ab595871270bcb32a&oe=5BE4F599',
    gender: 'Male'
  },

  {
    id: 12,
    name: 'Ana Cucos',
    age: 21,
    country: 'Republic of Moldova',
    university: 'Some university in Europe',
    picture: 'http://summer18.best.org.mk/images/participanti/Ana2.jpg',
    gender: 'Female'
  },

  {
    id: 13,
    name: 'Jascau Angela',
    age: 21,
    country: 'Romania',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/29573002_1936209719752261_5598838730736076791_n.jpg?_nc_cat=0&oh=1b791cab80b860aa638d9b4e6091f3d0&oe=5BDFA4C1',
    gender: 'Female'
  },

  {
    id: 14,
    name: 'Jordi Foix Esteve',
    age: 21,
    country: 'Spain',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/14963134_10205426320377436_8836907881971521013_n.jpg?_nc_cat=0&oh=037aa3740f61b7384895dfa699789ce1&oe=5BB31942', gender: 'Male'
  },

  {
    id: 15,
    name: 'Sorina Baban',
    age: 19,
    country: 'Romania',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/36476766_2242745262407620_3862891975409664000_n.jpg?_nc_cat=0&oh=e3acb76744a5b30806b6468b1a7db183&oe=5BE26CB5',
    gender: 'Female'
  },

  {
    id: 16,
    name: 'Olha Kopach',
    age: 22,
    country: 'Ukraine',
    university: 'Some university in Europe',
    picture: 'http://www.eyecareforanimals.com/wp-content/uploads/2015/05/female-avatar-300x300.png',
    gender: 'Female'
  },

  {
    id: 17,
    name: 'Wiktor Świniarski',
    age: 21,
    country: 'Poland',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/31124098_1660516594037272_2237423574598025216_n.jpg?_nc_cat=0&oh=adafc29398ebd71f8d106721c415d255&oe=5BA39578',
    gender: 'Male'
  },

  {
    id: 18,
    name: 'Sara Kitzing',
    age: 21,
    country: 'Sweden',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t31.0-8/20507090_1620661947944143_448226489066082412_o.jpg?_nc_cat=0&oh=324a146c70e1b08950defbf63a84ca5d&oe=5BE00733',
    gender: 'Female'
  },

  {
    id: 19,
    name: 'Anzhelika Seliverstova',
    age: 24,
    country: 'Russian Federation',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/1495507_598305246891872_2027312036_n.jpg?_nc_cat=0&oh=c6a8774868b628861b4ed47933196c6f&oe=5BAE3206',
    gender: 'Female'
  },

  {
    id: 20,
    name: 'Sabīne Blaua',
    age: 23,
    country: 'Latvia',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/29695137_2072564846359320_5281295602209076756_n.jpg?_nc_cat=0&oh=34bbdee1ba8cae9f046709c8c5759c6c&oe=5BE998B2',
    gender: 'Female'
  },

  {
    id: 21,
    name: 'Matko Matic',
    age: 20,
    country: 'Croatia',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/26047064_10203943409781957_4607754386315656814_n.jpg?_nc_cat=0&oh=87c62e7acfd6e013684e8ace6a6f8310&oe=5BDBC283',
    gender: 'Male'
  },

  {
    id: 22,
    name: 'Kirill Chebotaryov',
    age: 20,
    country: 'Ukraine',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/22366820_900151043465779_3639367129997444428_n.jpg?_nc_cat=0&oh=8a623f5dce370effb2df4cc81824126d&oe=5BE79257',
    gender: 'Male'
  },

  {
    id: 23,
    name: 'Sıla Ekşioğlu',
    age: 18,
    country: 'Turkey',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-1/c0.374.960.960/p960x960/31957747_1644447382328824_6518920530307842048_o.jpg?_nc_cat=0&oh=fa81d3888950ef0a9687e9516ac94d02&oe=5BDFBD24',
    gender: 'Female'
  },

  {
    id: 24,
    name: 'Arda Göksel',
    age: 22,
    country: 'Turkey',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/14462848_1071638999623962_2332028707119325184_n.jpg?_nc_cat=0&oh=3344f5cbaa67121c3c832118e8683b3f&oe=5BA034C8',
    gender: 'Male'
  },

  {
    id: 25,
    name: 'Duygu Şerefoğlu',
    age: 20,
    country: 'Turkey',
    university: 'Some university in Europe',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/35239594_2075589962654152_4703331553848066048_n.jpg?_nc_cat=0&oh=205220ef6874726540b4f6b9791c6507&oe=5BA3806F',
    gender: 'Female'
  }
];



export const ORG: Organiser[] = [
  {
    id: 1,
    name: 'Marin Malushovski',
    age: 20,
    university: 'BAS',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-1/c0.62.160.160/p160x160/31670267_2170607396289571_1025346342962069504_n.jpg?_nc_cat=0&oh=e9a87f08123132b9c6c0908dc23e9e8c&oe=5B9F57A7',
    gender: 'Male'
  },

  {
    id: 2,
    name: 'Emil Nikolovski',
    age: 22,
    university: 'FINKI',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-9/13880403_10208797745254123_4102905551978165918_n.jpg?_nc_cat=0&oh=1a2a6ff0f745761397ff28ea9dd70131&oe=5BE6C4A8',
    gender: 'Male'
  },

  {
    id: 3,
    name: 'Marija Horvat',
    age: 23,
    university: 'GFS',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/31936487_1870436029633340_1539209828121968640_n.jpg?_nc_cat=0&oh=cdf58713007acf64395ffaaa8a8c5281&oe=5BA89A86',
    gender: 'Female'
  },

  {
    id: 4,
    name: 'Andrea Temelkovska',
    age: 20,
    university: 'EFS',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/31870212_1045196348960875_5679444957279027200_n.jpg?_nc_cat=0&oh=6d9b03ff2c8f8e8c8f03b679060104f4&oe=5BE5B22E',
    gender: 'Female'
  },

  {
    id: 5,
    name: 'Marija Panova',
    age: 22,
    university: 'FINKI',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/11180633_1119387418088364_8624499135825123789_n.jpg?_nc_cat=0&oh=db6b6016885abd536c690da1d2943c3c&oe=5BA5BAC5',
    gender: 'Female'
  },

  {
    id: 6,
    name: 'Natalija Krkacheva',
    age: 21,
    university: 'FINKI',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/15822955_10208408149702200_1790611707668836853_n.jpg?_nc_cat=0&oh=6e5839b6842aff8e7412ac671d646a8c&oe=5BA8A537',
    gender: 'Female'
  },

  {
    id: 7,
    name: 'Petra Prelogovski',
    age: 21,
    university: 'FINKI',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-1/28167218_10215047743324454_6526482381028050226_n.jpg?_nc_cat=0&oh=b3bc85fc7a6e0608ea9ae1658a76c56b&oe=5BDAA5FD',
    gender: 'Female'
  },

  {
    id: 8,
    name: 'Zivko Serafimoski',
    age: 20,
    university: 'TMF',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Zivko_Serafimoski.jpg',
    gender: 'Male'
  },

  {
    id: 9,
    name: 'Irina Chabukovska',
    age: 20,
    university: 'FINKI',
    // tslint:disable-next-line:max-line-length
    picture: 'https://scontent.fskp3-1.fna.fbcdn.net/v/t31.0-8/18595569_10209288429313008_1626072723528498542_o.jpg?_nc_cat=0&oh=fb4a8cbd850a2302d0b22007f0ff6085&oe=5BDE6759',
    gender: 'Female'
  },

  {
    id: 10,
    name: 'Ivana Todoroska',
    age: 22,
    university: 'FEIT',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Ivana_Todoroska.jpg',
    gender: 'Female'
  },

  {
    id: 11,
    name: 'Tatjana Petkovska',
    age: 22,
    university: 'FEIT',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Tatijana_Petkoska.jpg',
    gender: 'Female'
  },

  {
    id: 12,
    name: 'Mitko Panov',
    age: 21,
    university: 'FINKI',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Mitko_Panov.jpg',
    gender: 'Male'
  },

  {
    id: 13,
    name: 'Joana Cukovska',
    age: 20,
    university: 'FINKI',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Joana_Cukovska.png',
    gender: 'Female'
  },

  {
    id: 14,
    name: 'Edi Frcovski',
    age: 21,
    university: 'PMF',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Edi_Frcovski.jpg',
    gender: 'Male'
  },

  {
    id: 15,
    name: 'Damjan Pecioski',
    age: 22,
    university: 'MFS',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Damjan_Pecioski.jpg',
    gender: 'Male'
  },

  {
    id: 16,
    name: 'Kristijan Vlahov',
    age: 20,
    university: 'FINKI',
    picture: 'Kristijan Vlahov',
    gender: 'Male'
  },

  {
    id: 17,
    name: 'Slave Temkov',
    age: 20,
    university: 'FINKI',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Slave_Temkov.jpg',
    gender: 'Male'
  },
  {
    id: 18,
    name: 'Sara Papazova',
    age: 21,
    university: 'MFS',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/Sara_Papazova.jpg',
    gender: 'Female'
  },
  {
    id: 19,
    name: 'Ana Sekulovska',
    age: 20,
    university: 'FINKI',
    picture: 'http://summer18.best.org.mk/images/membersSliki/korTim/AnaSekulovska.jpg',
    gender: 'Female'
  },

];

