import { MaterialId } from './MaterialId';
import { MaterialName } from './MaterialName';
import { MaterialImage } from './MaterialImage';


import { MaterialPrimitives } from '../utils';

export class Material {
  constructor(readonly id: MaterialId, readonly name: MaterialName, readonly image: MaterialImage) {}

  static fromPrimitives(primitives: MaterialPrimitives): Material {
    return new Material(new MaterialId(primitives.id), new MaterialName(primitives.name), new MaterialImage(primitives.image));
  }

  toPrimitives(): MaterialPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      image: this.image.value
    };
  }
}
