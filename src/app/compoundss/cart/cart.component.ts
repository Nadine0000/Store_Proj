import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Iproducts } from '../../models/iproducts';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  @Input() filterValue:string='';
  productsCart:Iproducts[]=[];
  products:Iproducts[]=[];
  product!:Iproducts
constructor(private cartservice:CartService){
}

ngOnInit(): void {
  this.cartservice.productsCart$.subscribe((cart:any) => {
    this.productsCart = cart;
  })
}
  deleteproductbyid(product:Iproducts){
    console.log("eeeee")
    this.cartservice.removeFromCart(product);
  }
    calculateTotalPrice(): number {
      return this.productsCart.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
  }


