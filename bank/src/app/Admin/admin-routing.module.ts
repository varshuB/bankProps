import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Component/Home/Dashboard/index/index.component';
import { SignInComponent } from './Component/pages/Authentication/Login/sign-in/sign-in.component';
import { SignUpComponent } from './Component/pages/Authentication/Register/sign-up/sign-up.component';
import { RecoverpwComponent } from './Component/pages/Authentication/RecoverPassword/recoverpw/recoverpw.component';
import { LockScreenComponent } from './Component/pages/Authentication/LockScreen/lock-screen/lock-screen.component';
import { ConfirmMailComponent } from './Component/pages/Authentication/ConfirmMail/confirm-mail/confirm-mail.component';
import { UserAddComponent } from './Component/pages/Users/AddUser/user-add/user-add.component';
import { UserListComponent } from './Component/pages/Users/UserList/user-list/user-list.component';
import { UserProfileComponent } from './Component/pages/Users/UserProfile/user-profile/user-profile.component';
import { AdminComponent } from './Component/pages/Admin/admin/admin.component';
import { Error404Component } from './Component/pages/Utilities/error404/error404.component';
import { Error500Component } from './Component/pages/Utilities/error500/error500.component';
import { MaintenanceComponent } from './Component/pages/Utilities/maintenance/maintenance.component';
import { BillingComponent } from './Component/pages/SpecialPages/billing/billing.component';
// import {CalendarComponent } from '@fullcalendar/core/CalendarComponent';
import { KanbanComponent } from './Component/pages/SpecialPages/kanban/kanban.component';
import { PricingComponent } from './Component/pages/SpecialPages/pricing/pricing.component';
import { RtlSupportComponent } from './Component/pages/SpecialPages/rtl-support/rtl-support.component';
import { TimeLineComponent } from './Component/pages/SpecialPages/time-line/time-line.component';
import { HorizontalComponent } from './Component/Home/MenuStyle/horizontal/horizontal.component';
import { DualHorizontalComponent } from './Component/Home/MenuStyle/dual-horizontal/dual-horizontal.component';
import { DualCompactComponent } from './Component/Home/MenuStyle/dual-compact/dual-compact.component';
import { BoxedHorizontalComponent } from './Component/Home/MenuStyle/boxed-horizontal/boxed-horizontal.component';
import { BoxedFancyComponent } from './Component/Home/MenuStyle/boxed-fancy/boxed-fancy.component';
import { CalenderComponent } from './Component/pages/SpecialPages/calender/calender.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },

  // dashboard
  { path: "index", component: IndexComponent},

  // authentication
  { path: "signIn", component: SignInComponent},
  { path: "signUp", component: SignUpComponent},
  { path: "lockScreen", component: LockScreenComponent},
  { path: "confirmMail", component: ConfirmMailComponent},
  { path: "recoverPw", component: RecoverpwComponent},

  // users
  { path: "addUser", component: UserAddComponent},
  { path: "userList", component: UserListComponent},
  { path: "userProfile", component: UserProfileComponent},
  { path: "admin", component: AdminComponent},
  { path: "userPrivacySetting", component: BoxedFancyComponent},

  // utilities
  { path: "error404", component: Error404Component},
  { path: "error500", component: Error500Component},
  { path: "maintenance", component: MaintenanceComponent},

  // special pages
  { path: "billing", component: BillingComponent},
  { path: "calender", component: CalenderComponent},
  { path: "kanban", component: KanbanComponent},
  { path: "pricing", component: PricingComponent},
  { path: "rtl", component: RtlSupportComponent},
  { path: "timeline", component: TimeLineComponent},

  // menu style
  { path: "horizontal", component: HorizontalComponent},
  { path: "dualHorizontal", component: DualHorizontalComponent},
  { path: "dualCompact", component: DualCompactComponent},
  { path: "boxedHorizontal", component: BoxedHorizontalComponent},
  { path: "boxedFancy", component: BoxedFancyComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
