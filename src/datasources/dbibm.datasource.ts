import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbibm',
  connector: 'ibmi',
  dsn: 'bhdasmq',
  connectionString: 'DBQ=QGPL;NAM=1',
  user: 'Jm007064',
  password: 'JM210593'
};

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
