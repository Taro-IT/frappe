//User Stories: frappe-981
import { OrderItemCustomPartSection } from './OrderItemCustomPartSection';
import { OrderItemCustomPartMaterial } from './OrderItemCustomPartMaterial';
import { OrderItemCustomPartType } from '../../../utils/OrderPrimitives';

export class OrderItemCustomPart {
  constructor(
    readonly section: OrderItemCustomPartSection,
    readonly material: OrderItemCustomPartMaterial,
  ) {}

  static fromPrimitives(primitives: OrderItemCustomPartType): OrderItemCustomPart {
    return new OrderItemCustomPart(
      new OrderItemCustomPartSection(primitives.section),
      new OrderItemCustomPartMaterial(primitives.material),
    );
  }

  toPrimitives(): OrderItemCustomPartType {
    return {
      section: this.section.value,
      material: this.material.value,
    };
  }
}
