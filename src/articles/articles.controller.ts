import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Response } from 'express';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService : ArticlesService){}
    
    @Post()
    async create(@Body() createArticleDto:CreateArticleDto,@Res() res:Response){
        const article  = await this.articlesService.create(createArticleDto);

        return res.status(HttpStatus.CREATED).json({
            statusCode : HttpStatus.CREATED,
            message :"Article Created",
            data : article

        })
    }

    @Get()
    async findAll(@Res() res : Response,@Query('date') date ?: string,@Query('tags') tags?:string)
    {
        const article = await this.articlesService.findAll({
            date,tags
        });

        return res.status(HttpStatus.OK).json({
              statusCode : HttpStatus.CREATED,
              message :"Fetched Successfully",
              data : article

        })
        
    }

    @Get(':id')
    async findOne(@Param('id',ParseIntPipe) id: number,@Res() res : Response){
        const article = await this.articlesService.findOne(id);
        return res.status(HttpStatus.OK).json({
              statusCode : HttpStatus.OK,
              message :"Fetched Successfully",
              data : article

        });
    }

    @Put(':id')
    async update(@Param('id',ParseIntPipe) id: number, @Body() updateArticleDto:UpdateArticleDto,@Res() res : Response) {
     const article = await this.articlesService.update(id, updateArticleDto);
          return res.status(HttpStatus.OK).json({
              statusCode : HttpStatus.OK,
              message :"Updated Successfully",
              data : article

        });

    }

    @Delete(':id')
    async remove(@Param('id',ParseIntPipe) id: number,@Res() res : Response) {
    const article = await this.articlesService.remove(id);
     return res.status(HttpStatus.OK).json({
              statusCode : HttpStatus.OK,
              message :"Updated Successfully",
              data : article

        });

    }



}
