import faker from 'faker';

export class StringMother {

  static random(): string {
    return faker.lorem.text();
  }
}
