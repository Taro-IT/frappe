import { ChangeEventHandler, useEffect, useState } from 'react';
import axios from 'axios';
import { MaterialPrimitives } from '@frappe/material/domain';

type Material = MaterialPrimitives & {
  readonly id: string;
  readonly name: string;
  readonly image: string;
}

export const useMaterials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    axios.get<{ result: MaterialPrimitives[] }>(`${ process.env.NEXT_PUBLIC_API_URL }/materials`)
      .then(materials => {
        setMaterials(materials.data.result.map(material => ({ ...material, value: false })));
      });

  }, []);


  return { materials };
}
