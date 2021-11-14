import { Material, MaterialId, MaterialName } from '../model';
  import { Nullable } from '@frappe/common/utils';

  export interface MaterialRepository {
    save(material: Material): Promise<void>;
    findByName(name: MaterialName): Promise<Nullable<Material>>;
    find(id: MaterialId): Promise<Nullable<Material>>;

  }
