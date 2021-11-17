import { Material, MaterialId, MaterialName, MaterialImage, MaterialIsActive, MaterialDeletedAt} from '@frappe/material/domain';
import {StringMother, UuidMother } from '@frappe/common/test';

export class MaterialMother {
  static random(): Material {
    return new Material(
      new MaterialId(UuidMother.random()), 
      new MaterialName(StringMother.random()), 
      new MaterialImage(StringMother.random()), 
      new MaterialIsActive(true)
    );
  }
  static deleted(): Material {
    return new Material(
      new MaterialId(UuidMother.random()), 
      new MaterialName(StringMother.random()), 
      new MaterialImage(StringMother.random()), 
      new MaterialIsActive(false), 
      new MaterialDeletedAt(new Date())
    );
  }
}
