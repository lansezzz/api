import { IsIP, IsNotEmpty } from 'class-validator';
export class CheckIPDto {
  @IsIP()
  @IsNotEmpty()
  ip: string;
}
