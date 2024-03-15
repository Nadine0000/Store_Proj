import { Routes } from '@angular/router';
import { HomeComponent } from './compoundss/home/home.component';
import { ContactusComponent } from './compoundss/contactus/contactus.component';
import { AboutusComponent } from './compoundss/aboutus/aboutus.component';
import { LoginComponent } from './compoundss/login/login.component';
import { ProfileComponent } from './compoundss/profile/profile.component';
import { ProductdetailsComponent } from './compoundss/productdetails/productdetails.component';
import { CartComponent } from './compoundss/cart/cart.component';

export const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"contactus",component:ContactusComponent},
{path:"aboutus",component:AboutusComponent},
{path:"login",component:LoginComponent},
{path:"profile",component:ProfileComponent},
{path:"cart",component:CartComponent},
{path:"product/:id",component:ProductdetailsComponent},
{path:"",component:HomeComponent}






];
