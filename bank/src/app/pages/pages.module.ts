import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BankPropertiesComponent } from './components/bank-properties/bank-properties.component';
import { PrivatePropertiesComponent } from './components/private-properties/private-properties.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ArticalOnIBAComponent } from './components/artical-on-iba/artical-on-iba.component';
import {NgxTypedJsModule} from 'ngx-typed-js';

import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { AgentComponent } from './components/agent/agent.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    BankPropertiesComponent,
    PrivatePropertiesComponent,
    AboutUsComponent,
    FaqComponent,
    ArticalOnIBAComponent,
    RegisterFormComponent,
    LoginComponent,
    PropertyDetailsComponent,
    AgentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    NgxTypedJsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    LayoutModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
