import faker from 'faker';

export class DateMother {

  static random(): Date {
    return faker.datatype.datetime()
  }

}
