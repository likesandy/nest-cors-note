import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    // 本质上只是设置了headers
    // ctx.set('Access-Control-Allow-Origin','*')
  });

  // app.useStaticAssets(join(__dirname, '../'));

  await app.listen(3000);
}
bootstrap();
