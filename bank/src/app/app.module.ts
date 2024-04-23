import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    CarouselModule,
    BrowserAnimationsModule,
    CarouselModule,
    // CarouselModule
    // MatExpansionModule,
    // MaterialModule
    // Ng5SliderModule
    RouterModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  exports:[]

})
export class AppModule { }
