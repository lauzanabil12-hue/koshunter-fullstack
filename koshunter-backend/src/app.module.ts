import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KosModule } from './kos/kos.module';

@Module({
  imports: [KosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}