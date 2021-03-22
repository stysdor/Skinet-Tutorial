import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaggingHeaderComponent } from './components/pagging-header/pagging-header.component';
import { PagerComponent } from './components/pager/pager.component';


@NgModule({
  declarations: [PaggingHeaderComponent, PagerComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PaggingHeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
