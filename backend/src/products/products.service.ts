import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { LogService } from 'src/log/log.service';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private logService: LogService,
    ) { }

    // Method to find all products
    findAll() {
        return this.productRepository.find();
    }

    // Method to find a product
    async findOne(codprod: number) {
        const product = await this.productRepository.findOne({
            where: { codprod },
        });
        if (!product) {
            throw new Error(`Produto ${codprod} nao encontrado`);
        }

        return product;
    }

    // Method to create a new product
    async create(dscrprod: string, marca: string, valor: string) {
        const product = new Product();

        product.dscrprod = dscrprod;
        product.marca = marca;
        product.valor = valor;

        let productCreated = this.productRepository.save(product);

        this.logService.create('CREATE', (await productCreated).codprod);
        return productCreated;
    }

    // Method to update an existing product
    async update(codprod: number, dscrprod: string, marca: string, valor: string) {
        const product = await this.productRepository.findOne({
            where: { codprod },
        });
        if (!product) {
            throw new Error(`Produto ${codprod} nao encontrado`);
        }
        product.dscrprod = dscrprod;
        product.marca = marca;
        product.valor = valor;

        this.logService.create('UPDATE', codprod);
        return this.productRepository.save(product);
    }

    // Method to inactivate a product
    async delete(codprod: number) {
        const product = await this.productRepository.findOne({
            where: { codprod },
        });
        
        if (!product) {
            throw new Error(`Produto ${codprod} nao encontrado`);
        }

        product.status = false;
        this.logService.create('DELETE', codprod);
        return this.productRepository.save(product);
    }
}
