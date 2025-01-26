import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgStyle],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load backend products
  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }
}
