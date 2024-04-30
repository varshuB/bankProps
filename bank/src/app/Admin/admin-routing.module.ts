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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  { path: "index", component: IndexComponent},

  { path: "signIn", component: SignInComponent},
  { path: "signUp", component: SignUpComponent},
  { path: "lockScreen", component: LockScreenComponent},
  { path: "confirmMail", component: ConfirmMailComponent},
  { path: "recoverPw", component: RecoverpwComponent},

  { path: "addUser", component: UserAddComponent},
  { path: "userList", component: UserListComponent},
  { path: "userProfile", component: UserProfileComponent},
  { path: "admin", component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
