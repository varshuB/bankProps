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
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[SignInComponent, ConfirmMailComponent, UserAddComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
