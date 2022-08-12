import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {keys as llaves} from '../config/.keys';
const config = {
  name: llaves.ibmset.name,
  connector: llaves.ibmset.connector,
  dsn: llaves.ibmset.dsn,
  connectionString: llaves.ibmset.connectionString,
  user: llaves.ibmset.user,
  password: llaves.ibmset.password,

};
console.log(config);
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbibmDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbibm';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbibm', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
