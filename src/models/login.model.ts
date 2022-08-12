import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Login extends Entity {
  @property({
    type: 'string',
    id: true,

  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
  })
  longinEmail: string;

  @property({
    type: 'string',
    required: true,
  })
  loginPhone: string;

  @property({
    type: 'boolean',
    default: false,
  })
  emailCheck?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  phoneCheck?: boolean;

  @property({
    type: 'boolean',
    default: true,
  })
  loginStatus?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Login>) {
    super(data);
  }
}

export interface LoginRelations {
  // describe navigational properties here
}

export type LoginWithRelations = Login & LoginRelations;
