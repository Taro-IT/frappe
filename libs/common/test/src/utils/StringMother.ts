import faker from 'faker';

export class StringMother {
  static random(): string {
    return faker.lorem.text();
  }

  static randomWord(): string {
    return faker.lorem.word();
  }

  static email(): string {
    return faker.internet.email();
  }

  static url(): string {
    return faker.internet.url();
  }
}
