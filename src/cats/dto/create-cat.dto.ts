import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { Min, Max } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Max(20)
  age: number;

  @IsString()
  @IsNotEmpty()
  breed: string;
}
