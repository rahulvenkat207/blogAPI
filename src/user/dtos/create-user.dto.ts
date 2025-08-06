import { IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "src/types/role.types";


export class CreateUserDto{

    @IsString()
    email : string;

    @IsString()
    password: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}