import { Material, MaterialName } from '../model';
  import { Nullable } from '@frappe/common/utils';

  export interface MaterialRepository {
    save(material: Material): Promise<void>;
    findByName(name: MaterialName): Promise<Nullable<Material>>;
  }
