import { Injectable } from '@nestjs/common';
import { CheckIPDto } from 'src/dto/CheckIP.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VpnapiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getIP(dto: CheckIPDto): Promise<string> {
    const key = this.configService.get<string>('API_KEY_VPN');
    const config = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    const urls = `https://vpnapi.io/api/${dto.ip}?key=${key}`;
    const { data } = await firstValueFrom(
      this.httpService.get(urls, config).pipe(
        catchError((error: AxiosError) => {
          throw error.response.data;
        }),
      ),
    );
    return data;
  }
}
