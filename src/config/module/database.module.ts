import { Module } from "@nestjs/common";
import { databaseProvider } from "src/config/database/datasources.datasource";

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule { }