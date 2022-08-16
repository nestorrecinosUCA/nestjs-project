import { FactoryProvider } from '@nestjs/common';
import { mySQLConnection } from 'src/config/database/connection-options';
import { DataSource } from 'typeorm';

export const databaseProvider: FactoryProvider[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const mySqlDataSource = new DataSource(mySQLConnection);

      return mySqlDataSource.initialize();
    },
  },
];
