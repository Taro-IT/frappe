import faker from 'faker';

export class StringMother {

  static random(): string {
    return faker.lorem.text();
  }

  static randomWord(): string {
    return faker.lorem.word();
  }
}