import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import {MatExpansionModule} from "@angular/material/expansion";
// import { MaterialModule } from '@angular/material';
import {CarouselModule} from 'ngx-owl-carousel-o';
// import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
    // CarouselModule
    // MatExpansionModule,
    // MaterialModule
    // Ng5SliderModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  exports:[]

})
export class AppModule { }
