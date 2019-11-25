import { Component } from '@angular/core';
import { IProduct } from '../shared/product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductList {
    pageTitle: string = "Product List!";
    imageWidth:number = 50;
    imageMargin: number = 1;
    showImage: boolean = false;
    filteredProducts: IProduct[];
    constructor(private productService:ProductService) {}
    ngOnInit():void {
      this.productService.getProducts().subscribe({
        next: productJson => {this.products = productJson;
          this.filteredProducts = this.products;
      }});
    }
    _listFilter: string;
    get listFilter(): string
    {
      return this._listFilter;
    }

    set listFilter(value:string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    products: IProduct[] = [];

      toggleImage() : void {
          this.showImage = !this.showImage;
      }

      performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) =>
          product.productName.toLowerCase().indexOf(filterBy) !== -1
        );
      }
      OnRatingClicked(message: string) : void {
        this.pageTitle = message;
      }



}