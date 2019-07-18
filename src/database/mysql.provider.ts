import { DATABASE_CONNECTION } from './../constants';
import { createConnection } from 'typeorm';

export const mysqlProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 33306,
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'rootpwd',
        database: process.env.DB_NAME || 'mysqldb',
        entities: [__dirname + '../../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
