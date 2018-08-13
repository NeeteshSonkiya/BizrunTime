import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TestComponent } from './test.component';
import { MyComponent } from './lara/my.component';
import { BookComponent } from './lara/book.component';
import { Book1Component } from './lara/book1.component';
import { Book2Component } from './lara/book2.component';
import { Book3Component } from './lara/book3.component';
import { BookService } from './lara/book.service';
import { Book4Component } from './lara/book4.component';
import { Book5Component } from './lara/book5.component';
import { Book6Component } from './lara/book6.component';
import { Book7Component } from './lara/book7.component';
import { Book8Component } from './lara/book8.component';
import { Book9Component } from './lara/book9.component';
import { Book10Component } from './lara/book10.component';
import { Book11Component } from './lara/book11.component';
import { Book12Component } from './lara/book12.component';
import { Book13Component } from './lara/book13.component';
import { Book14Component } from './lara/book14.component';
import { Book15Component } from './lara/book15.component';
import { Book16Component } from './lara/book16.component';
import { Book17Component } from './lara/book17.component';
import { Book18Component } from './lara/book18.component';
import { SummaryPipe } from './lara/summary.pipes';
import { Book19Component } from './lara/book19.component';
import { Book20Component } from './lara/book20.componemt';
import { Book21Component } from './lara/book21.component';
import { Book22Component } from './lara/book22.component';
import { Book23Component } from './lara/book23.component';
import { Book24Component } from './lara/book24.component';
import { Book25Component } from './lara/book25.component';
import { Book26Component } from './lara/book26.component';
import { Book27Component } from './lara/book27.component';
import { D1Component } from './directives/d1.component';
import { D2Component } from './directives/d2.component';
import { D3Component } from './directives/d3.component';
import { D4Component } from './directives/d4.component';
import { D5Component } from './directives/d5.component';
import { D6Component } from './directives/d6.component';
import { D7Component } from './directives/d7.component';
import { D8Component } from './directives/d8.component';
import { D9Component } from './directives/d9.component';
import { D10Component } from './directives/d10.component';
import { D11Component } from './directives/d11.component';
import { D12Component } from './directives/d12.component';
import { D13Component } from './directives/d13.component';
import { D14Component } from './directives/d14.component';
import { D15Component } from './directives/d15.component';
import { D16Component } from './directives/d16.component';
import { D17Component } from './directives/d17.component';
import { D18Component } from './directives/d18.component';
import { D19Component } from './directives/d19.component';
import { D20Component } from './directives/d20.component';
import { D21Component } from './directives/d21.component';
import { D22Component } from './directives/d22.component';
import { D23Component } from './directives/d23.componet';
import { D24Component } from './directives/d24.component';
import { D25Component } from './directives/d25.component';
import { D26Component } from './directives/d26.component';
import { D27Component } from './directives/d27.component';
import { D28Component } from './directives/d28.component';
import { D29Component } from './directives/d29.component';
import { InputFormatDirective } from './input-format.directive';
import { D30Component } from './directives/d30.component';
import { InputFormat1Directive } from './input-format1.directive';
import { D31Component } from './directives/d31.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';
import { Form7Component } from './form7/form7.component';
import { Form8Component } from './form8/form8.component';
import { Form9Component } from './form9/form9.component';




@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    MyComponent,
    BookComponent,
    Book1Component,
    Book2Component,
    Book3Component,
    Book4Component,
    Book5Component,
    Book6Component,
    Book7Component,
    Book8Component,
    Book9Component, 
    Book10Component,
    Book11Component,
    Book12Component,
    Book13Component,
    Book14Component,
    Book15Component,
    Book16Component,
    Book17Component,
    Book18Component,
    SummaryPipe,
    Book19Component,
    Book20Component,
    Book21Component,
    Book22Component,
    Book23Component,
    Book24Component,
    Book25Component,
    Book26Component,
    Book27Component,
    D1Component,
    D2Component,
    D3Component,
    D4Component,D5Component,D6Component,D7Component,D8Component,D9Component,D10Component,D11Component,
    D12Component,D13Component, D14Component,D15Component, D16Component,D17Component,D18Component,D19Component,
    D20Component, D21Component,D22Component,D23Component,D24Component,D25Component,D26Component,D27Component,
    D28Component,D29Component, InputFormatDirective, D30Component, InputFormat1Directive, D31Component, 
    Form1Component, Form2Component, Form3Component, Form4Component, Form5Component,Form6Component, 
    Form7Component, Form8Component, Form9Component

  ],
  imports: [FormsModule,
    BrowserModule, ReactiveFormsModule
  ],
  providers: [BookService],   // which ever class is define in the provider its used for single time object
  bootstrap: [AppComponent]
})
export class AppModule { }
