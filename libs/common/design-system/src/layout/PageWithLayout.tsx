import { NextComponentType } from 'next';
import { FC } from 'react';

export type PageWithLayout<Props = unknown> = NextComponentType & { readonly Layout?: FC<Props> };
