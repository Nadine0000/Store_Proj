import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  Routes = [
    {path:"home",title:"home"},
   
    {path:"contactus",title:"contact us"},
    {path:"aboutus",title:"about us"},
    {path:"login",title:"login"},
    {path:"profile",title:"profile"},
    {path:"cart",title:"cart"},
    
   
    
    
    
    
    
    
    ];




    
}

