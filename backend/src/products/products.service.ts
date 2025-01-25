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

    // Method to delete a product
    async delete(codprod: number) {
        const result = await this.productRepository.delete(codprod);
        if (result.affected === 0) {
            throw new Error(`Produto ${codprod} nao encontrado`);
        }
    }
}
