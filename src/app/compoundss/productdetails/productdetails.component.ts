import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../models/iproducts';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{
  islastindex:boolean=false;
  isfirst:boolean=false;
product!:Iproducts|undefined
constructor(private productserive:ProductService,private activatedroute:ActivatedRoute,private router:Router){

}
  ngOnInit(): void {
this.activatedroute.paramMap.subscribe((a)=>{

const paramid=a.get('id');
const id=paramid?+paramid:undefined;
this.product=this.productserive.getproductbyid(id);
this.islastindex=this.productserive.islastindex(id)
this.isfirst=this.productserive.isfirst(id)

})


   /*const ayhaga=this.activatedroute.snapshot.paramMap.get("id");
   const id=ayhaga?+ayhaga:undefined;*/
   /*console.log(id)
   this.product=this.productserive.getproductbyid(id);*/
  }



  
  gonext(id: number) {
    console.log('Going to next product...');
    const nextid = this.productserive.getnextproductid(id);
    this.router.navigate(['product/', nextid]);
  }

getpre(id:number){
    const preid=this.productserive.getpreviousproduct(id);
    this.router.navigate(['product/', preid]);
}



goBack(): void {
  this.router.navigate(['/']); // Navigate to the root URL or any desired destination
}

}


 /* ngOnInit(): void {
   const ayhaga=this.activatedroute.snapshot.paramMap.get("id");
   const id=ayhaga?+ayhaga:undefined
   this.product=this.productservice.getproductbyid(id);
  }

  goNext(id: number): void {
    const nextId = this.productservice.getNextProductId(id);
    this.router.navigate(['/product', nextId]);
    setTimeout(() => {
      window.location.reload();
    }, 100);    }

  goPrevious(id: number): void {
    const previousId = this.productservice.getPreviousProductId(id);
    this.router.navigate(['/product', previousId]);
    setTimeout(() => {
      window.location.reload();
    }, 100);    }*/

