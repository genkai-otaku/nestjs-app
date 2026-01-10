import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [AuthModule, UserModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
