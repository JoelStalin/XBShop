export namespace keys {
  export const Keys = 'Jm@22500706423%210713';
  export const Token = (Date.now() / 1000) + (60 * 60 * 10);
  export const config = {
    name: 'db',
    connector: 'postgresql',
    url: 'postgres://postgres:root@localhost:5433/postgres',
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'root',
    database: 'postgres'
  };
  export const iconfig = {
    name: 'dbibm',
    connector: 'ibmi',
    dsn: 'AS400',
    connectionString: 'Driver={IBM i Access ODBC Driver};System=172.30.6.56;Uid=od310467;Pwd=prueba01;DBQ=QGPL;',
    user: 'Jm007064',
    password: 'JM210593'
  };


}
