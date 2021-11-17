import { MaterialId } from './MaterialId';
import { MaterialName } from './MaterialName';
import { MaterialImage } from './MaterialImage';


import { MaterialPrimitives } from '../utils';
import { MaterialIsActive } from './MaterialIsActive';
import { MaterialDeletedAt } from './MaterialDeletedAt';

export class Material {
  constructor(
    readonly id: MaterialId, 
    readonly name: MaterialName, 
    readonly image: MaterialImage, 
    readonly isActive: MaterialIsActive, 
    readonly deletedAt?: MaterialDeletedAt
  ) {}

  static fromPrimitives(primitives: MaterialPrimitives): Material {
    return new Material(
      new MaterialId(primitives.id), 
      new MaterialName(primitives.name), 
      new MaterialImage(primitives.image), 
      new MaterialIsActive(primitives.isActive), 
      new MaterialDeletedAt(primitives.deletedAt)
    );
  }

  toPrimitives(): MaterialPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      image: this.image.value,
      isActive: this.isActive.value,
      deletedAt: this.deletedAt?.value
    };
  }
}
