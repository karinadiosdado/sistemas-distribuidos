import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs.js';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    // configuracion de pipes
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted:true,
      }),
    );
// puerto 
//  await app.listen(process.env.PORT ?? 3000);
// await app.listen(`${envs.port}`);
 await app.listen(envs.port);//
 console.log(`Server running on port ${envs.port}`)
}
await bootstrap();
