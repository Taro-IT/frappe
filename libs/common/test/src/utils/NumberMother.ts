import faker from 'faker';

export class NumberMother {
  static random(): number {
    return faker.datatype.number();
  }

  static randomPositive(): number {
    return faker.datatype.number({ min: 1 });
  }
}
