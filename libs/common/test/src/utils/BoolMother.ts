import faker from 'faker';

export class BooleanMother {
  static random(): boolean {
    return faker.datatype.boolean();
  }
}