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
    name: 'db2ibmi',
    connector: 'ibmi',
    dsn: 'AS400',
    connectionString: 'QGPL',
    user: 'JM007064',
    password: 'Jm210593'
  };


}
