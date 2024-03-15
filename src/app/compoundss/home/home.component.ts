import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


  export class HomeComponent implements OnInit, OnDestroy {
    observable3: Observable<any> = new Observable();
    subsription!: Subscription;
  




  ngOnInit(): void {
    this.observable3 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        if (count == 10) observer.complete();
        observer.next('Hello');
        count++;
      }, 1000);
    });

    this.subsription = this.observable3.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }



}
