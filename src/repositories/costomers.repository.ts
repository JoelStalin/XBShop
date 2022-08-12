import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources/db.datasource';
import {Costomers, CostomersRelations} from '../models/costomers.model';

export class CostomersRepository extends DefaultCrudRepository<
  Costomers,
  typeof Costomers.prototype.id,
  CostomersRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Costomers, dataSource);
  }
}
