import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { LogService } from 'src/log/log.service';

@Controller('produto')
export class ProductsController {
    constructor(private readonly productService: ProductsService, private readonly logService: LogService) { }

    //GET request handler to fetch all products
    @Get()
    findAll() {
        return this.productService.findAll();
    }

    //GET request handler to fetch a single product
    @Get(':codprod')
    findOne(@Param('codprod') codprod: number) {
        return this.productService.findOne(codprod);
    }

    //POST request handler to create a new product
    @Post()
    create(@Body('dscrprod') dscrprod: string, @Body('marca') marca: string, @Body('valor') valor: string) {
        return this.productService.create(dscrprod, marca, valor);
    }

    //PUT request handler to update an existing product
    @Put(':codprod')
    update(
        @Param('codprod') codprod: number,
        @Body('dscrprod') dscrprod: string,
        @Body('marca') marca: string,
        @Body('valor') valor: string
    ) {
        return this.productService.update(codprod, dscrprod, marca, valor);
    }

    //DELETE request handler to inactivate a product
    @Delete(':codprod')
    remove(@Param('codprod') codprod: number) {
        return this.productService.delete(codprod);
    }
}
