import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './Component/Home/Dashboard/index/index.component';
import { SignInComponent } from './Component/pages/Authentication/Login/sign-in/sign-in.component';
import { SignUpComponent } from './Component/pages/Authentication/Register/sign-up/sign-up.component';
import { ConfirmMailComponent } from './Component/pages/Authentication/ConfirmMail/confirm-mail/confirm-mail.component';
import { LockScreenComponent } from './Component/pages/Authentication/LockScreen/lock-screen/lock-screen.component';
import { RecoverpwComponent } from './Component/pages/Authentication/RecoverPassword/recoverpw/recoverpw.component';
import { UserProfileComponent } from './Component/pages/Users/UserProfile/user-profile/user-profile.component';
import { UserAddComponent } from './Component/pages/Users/AddUser/user-add/user-add.component';
import { UserListComponent } from './Component/pages/Users/UserList/user-list/user-list.component';
import { BillingComponent } from './Component/pages/SpecialPages/billing/billing.component';
import { CalenderComponent } from './Component/pages/SpecialPages/calender/calender.component';
import { KanbanComponent } from './Component/pages/SpecialPages/kanban/kanban.component';
import { PricingComponent } from './Component/pages/SpecialPages/pricing/pricing.component';
import { RtlSupportComponent } from './Component/pages/SpecialPages/rtl-support/rtl-support.component';
import { TimeLineComponent } from './Component/pages/SpecialPages/time-line/time-line.component';
import { Error404Component } from './Component/pages/Utilities/error404/error404.component';
import { Error500Component } from './Component/pages/Utilities/error500/error500.component';
import { MaintenanceComponent } from './Component/pages/Utilities/maintenance/maintenance.component';
import { HorizontalComponent } from './Component/Home/MenuStyle/horizontal/horizontal.component';
import { DualHorizontalComponent } from './Component/Home/MenuStyle/dual-horizontal/dual-horizontal.component';
import { DualCompactComponent } from './Component/Home/MenuStyle/dual-compact/dual-compact.component';
import { BoxedHorizontalComponent } from './Component/Home/MenuStyle/boxed-horizontal/boxed-horizontal.component';
import { BoxedFancyComponent } from './Component/Home/MenuStyle/boxed-fancy/boxed-fancy.component';


@NgModule({
  declarations: [
    IndexComponent,
    SignInComponent,
    SignUpComponent,
    ConfirmMailComponent,
    LockScreenComponent,
    RecoverpwComponent,
    UserProfileComponent,
    UserAddComponent,
    UserListComponent,
    BillingComponent,
    CalenderComponent,
    KanbanComponent,
    PricingComponent,
    RtlSupportComponent,
    TimeLineComponent,
    Error404Component,
    Error500Component,
    MaintenanceComponent,
    HorizontalComponent,
    DualHorizontalComponent,
    DualCompactComponent,
    BoxedHorizontalComponent,
    BoxedFancyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    SignInComponent,
    RecoverpwComponent,
    SignUpComponent,
    UserAddComponent,
    UserListComponent,
    ConfirmMailComponent,
    BillingComponent,
    CalenderComponent,
    KanbanComponent,
    PricingComponent,
    RtlSupportComponent,
    TimeLineComponent,
    HorizontalComponent,
    DualHorizontalComponent,
    DualCompactComponent,
    BoxedHorizontalComponent,
    BoxedFancyComponent,
    Error404Component,
    Error500Component,
    MaintenanceComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
