import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor() { }
  
  @HostListener('focus')
  onFocus()
  {
    console.log("from focus");
  }

  @HostListener('blur')
  onBlur()
  {
    console.log("from blur");
  }

}