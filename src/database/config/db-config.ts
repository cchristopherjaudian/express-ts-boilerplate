import dotenv from 'dotenv';

dotenv.config();

class DbConfig {
   static instance = {
      dev: {
         type: process.env.DB_CLIENT!,
         host: process.env.DB_HOST!,
         port: Number(process.env.DB_PORT)!,
         username: process.env.DB_USER!,
         password: process.env.DB_PASS!,
         database: process.env.DB_NAME!,
         entities: ['./entities/index.ts'],
      },
   };
}

export default DbConfig;
