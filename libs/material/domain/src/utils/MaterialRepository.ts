import { Material, MaterialId, MaterialName } from '../model';
  import { Nullable } from '@frappe/common/utils';
import { Criteria } from '@dinnosc/criteria';

  export interface MaterialRepository {
    save(material: Material): Promise<void>;
    findByName(name: MaterialName): Promise<Nullable<Material>>;
    find(id: MaterialId): Promise<Nullable<Material>>;
    all(): Promise<Material[]>;
    search (criteria: Criteria<Material>): Promise<Material[]>
  }
