import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as devConfig from '../config/dev.dbibm.json'; // import dev json
import * as prodConfig from '../config/prod.dbibmi.json'; // import prod json


export class ibmset {
  name: string;
  connector: string;
  dsn: string;
  connectionString: string;
  user: string;
  password: string;
}

let config: ibmset;

if (process.env.NODE_ENV === 'production') {
  console.log(' --- Database in Prod Mode --- ');
  config = prodConfig;
  console.log(config);
} else {
  console.log(' --- Database in Dev Mode --- ');
  config = devConfig;
  console.log(config);
}
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
