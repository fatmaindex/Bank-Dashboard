import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class LayoutsModule { }
