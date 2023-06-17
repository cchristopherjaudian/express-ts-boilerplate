import 'reflect-metadata';
import type { Entity, Repository, ObjectLiteral } from 'typeorm';
import { DataSource } from 'typeorm';
import config from './config/db-config';

type TConfig = {
   type: 'postgres' | 'mysql';
   host: string;
   port: number;
   username: string;
   password: string;
   database: string;
   entities: string[];
};

const nodeEnvConfig = config.instance[process.env.NODE_ENV as keyof typeof config.instance];

export interface IAppSource {
   getRepository: (entity: typeof Entity) => Promise<Repository<ObjectLiteral>>;
}

class AppSource implements IAppSource {
   private _conn: DataSource;
   private static instance: AppSource;

   private constructor() {
      this._conn = new DataSource(nodeEnvConfig as TConfig);
   }

   public static getInstance(): AppSource {
      if (!AppSource.instance) {
         AppSource.instance = new AppSource();
      }
      return AppSource.instance;
   }

   public async getRepository(entity: typeof Entity): Promise<Repository<ObjectLiteral>> {
      try {
         const repository = await this._conn.getRepository(entity);
         return repository;
      } catch (error) {
         throw error;
      }
   }
}

export default AppSource;
