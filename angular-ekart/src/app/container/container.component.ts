import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class AppContainer {
  // addToCart:number = 0;
  // name='rajan'
  // product = {
  //   name: 'iPhone X',
  //   price: 789,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage: '/assets/images/iphone.png'
  // }

  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100)
  // }

  // onNameChange(event: any){
  //   this.name = event.target.value;
  //   console.log(event.target.value);
  // }

  // decrementCartValue(){
  //   if(this.addToCart > 0){
  //     this.addToCart--;
  //   }

  // }

  // incrementCartValue(){
  //   if(this.addToCart < this.product.inStock){
  //     this.addToCart++;
  //   }

  // }
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
  searchText: string = '';
  setSearchText(value: string) {
    this.searchText = value;
  }
}
