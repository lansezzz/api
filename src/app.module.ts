import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { VpnapiService } from './vpnapi/vpnapi.service';
import { VpnapiController } from './vpnapi/vpnapi.controller';
import { VpnapiModule } from './vpnapi/vpnapi.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [ConfigModule.forRoot(), AuthModule, VpnapiModule, HttpModule],
  providers: [VpnapiService],
  controllers: [VpnapiController],
})
export class AppModule {}
