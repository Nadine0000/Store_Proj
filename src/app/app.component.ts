import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compoundss/header/header.component';
import { HomeComponent } from './compoundss/home/home.component';
import { FooterComponent } from './compoundss/footer/footer.component';

import { ProductsComponent } from './compoundss/products/products.component';

/*import { LifecycleComponent } from './lifecycle/lifecycle.component';*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,FooterComponent,ProductsComponent],/*LifecycleComponent*/
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-store';
}
