import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {keys as llaves} from '../config/.keys';
const config = {
  name: llaves.config.name,
  connector: llaves.config.connector,
  url: llaves.config.url,
  host: llaves.config.host,
  port: llaves.config.port,
  user: llaves.config.user,
  password: llaves.config.password,
  database: llaves.config.database
};
console.log(config);


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
