import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MoreComponent } from './more/more.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ArticalOnIBAComponent } from './components/artical-on-iba/artical-on-iba.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: "home", component: HomeComponent},
  { path: "contact", component: ContactComponent},
  { path: "more", component: MoreComponent},
  { path: "about-us", component: AboutUsComponent},
  { path: "faq", component: FaqComponent},
  { path: "artical", component: ArticalOnIBAComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
