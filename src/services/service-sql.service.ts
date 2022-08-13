import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {keys as llaves} from '../config/.keys';
const odbc = require('odbc');

/*
 * Fix the service type. Possible options can be:
 * - import {ServiceSql} from 'your-module';
 * - export type ServiceSql = string;
 * - export interface ServiceSql {}
 */

@injectable({scope: BindingScope.TRANSIENT})
export class ServiceSql {
  constructor(/* Add @inject to inject parameters */) { }
  async getuser() {
    const conn = await odbc.connect(llaves.ibmset.connectionString);
    const rquery = conn.query("SELECT * From PGMJEM.TRAMX");
    return {
      resultado: rquery,
      Status: 'finalizado'
    }
  }
  value() {
    // Add your implementation here
    throw new Error('To be implemented');
  }
}
