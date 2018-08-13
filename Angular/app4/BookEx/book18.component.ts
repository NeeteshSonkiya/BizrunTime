import { Component } from '@angular/core';

@Component({
  selector: 'book18',
  template: `
            Title : {{ title }} <br/>
            Title : {{ title | uppercase}} <br/>
            Title : {{ title | lowercase}} <br/>
            Title : {{ title | lowercase | uppercase}} <br/>
            pages : {{ pages }} <br/>
            pages : {{ pages | number}} <br/>
            price : {{ price }} <br/>
            price : {{ price | number}} <br/>
            price : {{ price | number : '5.2-2'}} <br/>
            price : {{ price | number : '6.2-2'}} <br/>
            price : {{ price | currency }} <br/>
            price : {{ price | currency : 'AUD'}} <br/>
            price : {{ price | currency : 'INR'}} <br/>
            price : {{ price | currency : 'AUD':'7.2-2'}} <br/>
            Title : {{ title | summary }} <br/>
            Date : {{ dob }} <br/>
            Date : {{ dob | date }} <br/>
            Date : {{ dob | date : 'shortDate'}} <br/>
            `       
})
export class Book18Component 
{
    title = "Hello to Angular World";
    pages = 2000456;
    price = 12345.56789;
    dob = new Date(2018, 2, 23);
}
