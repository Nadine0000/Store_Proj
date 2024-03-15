import { Component } from '@angular/core';
import { Iproducts } from '../../models/iproducts';

import { ForstyleDirective } from '../../directives/forstyle.directive';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { SingleProductComponent } from '../single-product/single-product.component';

import { FormsModule } from '@angular/forms';


import { ProductService } from '../services/product.service';
import productlist from '../../../assets/productlistt';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ForstyleDirective,NgClass,DatePipe,SingleProductComponent,FormsModule,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

 products:Iproducts[]=productlist;
 constructor(private productservice:ProductService){
 }
 selectedCategoryId: number | null = null;

 searchTerm:string="";


  filteredProducts: Iproducts[] =this.products
  totalCartPrice: number = 0;

  productsCart:Iproducts[]=[];

  ngOnInit(): void {
    this.productservice.productcart$.subscribe((cart: Iproducts[])=>{this.productsCart=cart})
    }


    calculateTotalPrice() {
      this.totalCartPrice = this.productsCart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    }

    addToCart(product: Iproducts) {
      const existingProduct = this.productsCart.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        product.quantity -= 1;
      } else {
        this.productsCart.push({ ...product, quantity: 1 });
        product.quantity -= 1;
      }
      this.calculateTotalPrice();
    }


  filterByCategory(CategoryId: number | null) {
    this.selectedCategoryId = CategoryId;

    if (CategoryId !== null) {
      this.filteredProducts = this.getFilteredProducts();
    }
  }
    currentdate:Date=new Date();
   getFilteredProducts(): Iproducts[] {
    if (this.selectedCategoryId === null) {
      return this.products;


    }


    return this.products.filter(product => product.CategoryId==this.selectedCategoryId);


  }


 /* deleteProduct(i: number) {
    if (this.productsCart[i].quantity === 1) {

      this.productsCart.splice(i, 1);
    } else {

      this.productsCart[i].quantity--;
      this.increaseProductQuantity(this.productsCart[i]);
    }

    // Recalculate total price
    this.totalCartPrice = this.calculatetotalprice();
  }*/



  getFilteredProductsByName(): Iproducts[] {
    if(this.searchTerm!=null){
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );}
    else{
      return this.searchTerm
    }
  }


  calculatetotalprice() {
    let totalPrice = 0;
    this.productsCart.forEach(product => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }




/*addtoproduct(){
  this.productservice.addproducttocart(this.product)
}*/








}










 /* ClientName:string="nadine";




  showimg:boolean=true;


  handletoggle(){
  this.showimg=!this.showimg;

  }*/
