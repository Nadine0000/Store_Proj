import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Forstyle]',
  standalone: true
})
export class ForstyleDirective implements OnChanges {

 @Input() set quantity(value:number){
    if(value==0)
    this.elementref.nativeElement.style.opacity='1';
    
  }

  /*constructor(private elementref:ElementRef) {
   elementref.nativeElement.style.border = "2px solid black";
    elementref.nativeElement.style.borderRadius = "10px"; 
    elementref.nativeElement.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)"; 
   }*/
  
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.elementref.nativeElement,'box-shadow','0px 0px 20px 10px rgba(0,0,0,0.5) ')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.elementref.nativeElement,'box-shadow','0px 0px 0px 0px rgba(0,0,0,0.5) ')
  }


   constructor(private elementref:ElementRef,private renderer:Renderer2){
    elementref.nativeElement.style.border = "2px solid black";
    elementref.nativeElement.style.borderRadius = "10px"; 
    elementref.nativeElement.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)"; 
    
   }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
  }
}
