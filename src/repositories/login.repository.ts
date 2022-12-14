import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources/db.datasource';
import {Login, LoginRelations} from '../models/login.model';

export class LoginRepository extends DefaultCrudRepository<
  Login,
  typeof Login.prototype.id,
  LoginRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Login, dataSource);
  }
}
