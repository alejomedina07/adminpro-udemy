import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcumbsComponent,
    NopagesfoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcumbsComponent,
    NopagesfoundComponent
  ]
})


export class SharedModule { }
