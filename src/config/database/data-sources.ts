import { FactoryProvider } from '@nestjs/common';
import { mySQLConnection } from './connection';

export const databaseProvider: FactoryProvider[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const mySqlDataSource = mySQLConnection;

      return await mySqlDataSource.initialize();
    },
  },
];
