import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ForstyleDirective } from '../../directives/forstyle.directive';
import productlist from '../../../assets/productlistt';
import { DatePipe, NgClass } from '@angular/common';
import { Iproducts } from '../../models/iproducts';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [ForstyleDirective,NgClass,DatePipe],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

productsCart:Iproducts[]=[];

totalCartPrice:number=0
  currentdate:Date=new Date();
  @Output() hangleaddtocart =new EventEmitter<Iproducts>();
 @Input() product!:Iproducts

dec(product:Iproducts){
  if(product.quantity>0)
  product.quantity=product.quantity-1;
  }


  addProductToCart(event: MouseEvent, product: Iproducts) {
    event.stopPropagation()
    this.cartservice.addToCart(product);
  }


constructor(private route:Router,private productservice:ProductService,private cartservice:CartService){}
  handleroute(id:number){
    this.route.navigate(["/product",id])
  }

}
