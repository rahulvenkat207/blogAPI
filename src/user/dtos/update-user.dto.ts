import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { Role } from "src/types/role.types";

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}