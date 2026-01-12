import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'ユーザー名',
    example: '山田太郎',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'メールアドレス',
    example: 'yamada@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'パスワード',
    example: 'password123',
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
