import { Module } from '@nestjs/common';
import { MealModule } from '@avans-nx-workshop/backend/features';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
