import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BankPropertiesComponent } from './components/bank-properties/bank-properties.component';
import { PrivatePropertiesComponent } from './components/private-properties/private-properties.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ArticalOnIBAComponent } from './components/artical-on-iba/artical-on-iba.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { AgentComponent } from './components/agent/agent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: "register", component: RegisterFormComponent},
  {path:"agent", component: AgentComponent},

  { path: "home", component: HomeComponent},
  { path: "contact", component: ContactComponent},
  { path: "bank-properties", component: BankPropertiesComponent},  
  { path: "private-properties", component: PrivatePropertiesComponent},
  { path: "about-us", component: AboutUsComponent},
  { path: "faq", component: FaqComponent},
  { path: "artical", component: ArticalOnIBAComponent},
  { path: "property", component: PropertyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
