import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Useribm extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  ibmusern: string;

  @property({
    type: 'string',
    required: true,
  })
  ibmud: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Useribm>) {
    super(data);
  }
}

export interface UseribmRelations {
  // describe navigational properties here
}

export type UseribmWithRelations = Useribm & UseribmRelations;
