import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
   selector: "[appStyle]"
})

export class StyleDirective {
   constructor(
      private element: ElementRef,
      private render: Renderer2
   ){}
   @HostListener('click', ['$event']) onClick(event: Event){
      console.log(event)
   }
}