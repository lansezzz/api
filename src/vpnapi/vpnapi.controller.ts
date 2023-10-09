import {
  Controller,
  Get,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { VpnapiService } from './vpnapi.service';
import { AuthGuard } from '@nestjs/passport';
import { CheckIPDto } from 'src/dto/CheckIP.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBasicAuth()
@ApiTags('vpnapi')
@Controller('vpnapi')
export class VpnapiController {
  constructor(private readonly VPNService: VpnapiService) {}

  @Get()
  @ApiOperation({ summary: 'Проверка ip' })
  @ApiResponse({ status: 200, description: 'возвращает  информацию об ip' })
  @UseGuards(AuthGuard('basic'))
  @ApiQuery({
    allowEmptyValue: false,
    required: true,
    description: 'принмаетp ip вида 0.0.0.0',
    type: 'string',
    example: 'http://127.0.0.1:3000/vpnapi?ip=8.8.8.8',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getHello(@Query() ip: CheckIPDto): Promise<string> {
    return await this.VPNService.getIP(ip);
  }
}
