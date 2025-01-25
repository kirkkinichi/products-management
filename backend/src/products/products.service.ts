import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) { }

    // Method to get all products
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
    create(dscrprod: string, marca: string, valor: string) {
        const product = new Product();
        product.dscrprod = dscrprod;
        product.marca = marca;
        product.valor = valor;
        return this.productRepository.save(product);
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
        return this.productRepository.save(product);
    }
}
