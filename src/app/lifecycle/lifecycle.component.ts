/*import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  constructor(){
    console.log("first for constructor");
  }
  ngOnDestroy(): void { //bstop ay haga event,interal ay haga
   console.log("destroyy");
  }
  ngAfterViewChecked(): void {
    console.log("afterviewchecked")
  }
  ngAfterViewInit(): void {
    console.log('gAfterviewinit'); //b3d ma html kolo yt3mlo init
  }
  ngAfterContentChecked(): void {
    console.log('gAfterContentChecked');//detect ay change 7sl 
  }
  ngAfterContentInit(): void {
    console.log('gAfterContentinit');
  }
  ngDoCheck(): void {
    console.log("docheck");
  }
  ngOnInit(): void {
    console.log("on init");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges")
  }
  
  

}
*/