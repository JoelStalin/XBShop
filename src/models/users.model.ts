import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Users extends Entity {
  @property({
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
  })
  userRole: string;

  @property({
    type: 'boolean',
    required: true,
  })
  userStatus: boolean;

  @property({
    type: 'number',
    required: true,
  })
  entityId: number;

  @property({
    type: 'number',
  })
  loginId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
