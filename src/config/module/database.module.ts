import { Module } from "@nestjs/common";
import { databaseProvider } from "../database/data-sources";

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule { }