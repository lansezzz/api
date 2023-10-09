import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VpnapiController } from './vpnapi.controller';
import { VpnapiService } from './vpnapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [VpnapiService],
  controllers: [VpnapiController],
})
export class VpnapiModule {}
