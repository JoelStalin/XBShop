export namespace keys {
  export const Keys = 'Jm@22500706423%210713';
  export const Token = (Date.now() / 1000) + (60 * 60 * 10);
  export const config = {
    name: 'dbpos',
    connector: 'postgresql',
    url: 'postgres://qrkgtpsq:Kjt4EkUAWZT4AlYg88WA1ju8wAW_DXDs@rajje.db.elephantsql.com/qrkgtpsq',
    host: 'rajje.db.elephantsql.com',
    port: 5433,
    user: 'qrkgtpsq',
    password: 'Kjt4EkUAWZT4AlYg88WA1ju8wAW_DXDs',
    database: 'postgres'
  };
  export const ibmset = {
    name: 'dbibm',
    connector: 'ibmi',
    dsn: 'bhdasmq',
    connectionString: 'Driver={IBM i Access ODBC Driver};System=172.30.6.56;Uid=od310467;Pwd=prueba01;DBQ=QGPL;',
    user: 'od310467',
    password: 'prueba01'
  };




}
