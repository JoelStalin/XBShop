import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Costomers, CostomersRelations} from '../models';

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
