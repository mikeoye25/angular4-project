import { Component, OnInit } from '@angular/core';

import { IProduct } from './products';
import { ProductService } from './products.service';

import { Ingredient } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

  constructor(private _productService: ProductService) {

    }

  ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
