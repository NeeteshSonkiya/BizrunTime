//ng g d input-format1
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat1]'
})
export class InputFormat1Directive {

  constructor(private er : ElementRef) { }
  @HostListener('blur')
  onBlur()
  {
    let value = this.er.nativeElement.value;
    this.er.nativeElement.value = value.toUpperCase();
  }
}