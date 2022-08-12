import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {keys as llaves} from '../config/.keys';


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbibmDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbibm';
  static readonly defaultConfig = llaves.iconfig;

  constructor(
    @inject('datasources.config.dbibm', {optional: true})
    dsConfig: object = llaves.iconfig,
  ) {
    super(dsConfig);
  }
}
