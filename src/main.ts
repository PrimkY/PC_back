import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService)

  const PORT:number = parseInt(appService.getPort()) || 5001
  const apollo_url:string = appService.getApolloURL()

  app.enableCors({
    origin: apollo_url,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: false,
    allowedHeaders: 'Content-Type, Authorization',
  });

  const config = new DocumentBuilder()
    .setTitle('PC configurator')
    .setDescription('Тут будет описание этой документации')
    .setVersion('1.0')
    .addTag('configurator')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT);
  console.log(`[nest main] -> server started on: http://localhost:${PORT}` ,`\n[nest main] -> docs started on: http://localhost:${PORT}/api/docs`);
}
bootstrap();
