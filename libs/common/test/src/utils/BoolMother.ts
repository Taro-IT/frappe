import faker from 'faker';

export class BoolMother {
  static random(): boolean {
    return faker.datatype.boolean();
  }
}
