import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Costomers extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    default: 'email@dominio.com',
  })
  email?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  full_name: string;

  @property({
    type: 'string',
    required: true,
  })
  contry: string;

  @property({
    type: 'string',
    default: '8090000000',
  })
  phone?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Costomers>) {
    super(data);
  }
}

export interface CostomersRelations {
  // describe navigational properties here
}

export type CostomersWithRelations = Costomers & CostomersRelations;
