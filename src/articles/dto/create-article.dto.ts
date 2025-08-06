import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateArticleDto{
    @IsString()
    title: string;

    @IsString()
    content : string;

    @IsArray()
    @IsOptional()
    tags ?: string[];

    @IsDateString()
    @IsOptional()
    publishedAt ?: string;

    @IsNumber()
    authorId : number
}