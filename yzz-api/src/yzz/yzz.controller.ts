import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateYzzDto } from './dto/create-yzz.dto'
import { UpdateYzzDto } from './dto/update-yzz.dto';
import {YzzService} from './yzz.service'

@Controller('yzz')
export class YzzController {

    constructor(private readonly yzz_service:YzzService){}


    @Get()
    getYzz(@Query('tool') tool?: "ms-word"|"ms-powerPoint") {
        if (tool?.length === 0) {
            return "Hello from YzzController";
        } else {
            return this.yzz_service.getYusers(tool);

        }
    }

    @Get(":id")
    getYzzById(@Param('id',ParseIntPipe) id: number) {
        return this.yzz_service.getYuserId(id);
    }

    @Post()
    createYzz(@Body(new ValidationPipe()) createYzzDto: CreateYzzDto) {
        return this.yzz_service.createUser(createYzzDto);
    }

    @Put(':id')
    updateYazz(@Param('id') id: number, @Body() updateYzzDto: UpdateYzzDto) {
        return this.yzz_service.updateUser(id,updateYzzDto)
    }

    @Delete(':id')
    removeYzz(@Param('id') id: string) {
        return this.yzz_service.removeUser(+id);
    }
}
