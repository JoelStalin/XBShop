import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbibmDataSource} from '../datasources/dbibm.datasource';
import {Useribm, UseribmRelations} from '../models';

export class UsersibmRepository extends DefaultCrudRepository<
  Useribm,
  typeof Useribm.prototype.id,
  UseribmRelations
> {
  constructor(
    @inject('datasources.dbibm') dataSource: DbibmDataSource,
  ) {
    super(Useribm, dataSource);
  }
}
