import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BankPropertiesComponent } from './components/bank-properties/bank-properties.component';
import { PrivatePropertiesComponent } from './components/private-properties/private-properties.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ArticalOnIBAComponent } from './components/artical-on-iba/artical-on-iba.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    BankPropertiesComponent,
    PrivatePropertiesComponent,
    AboutUsComponent,
    FaqComponent,
    ArticalOnIBAComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
