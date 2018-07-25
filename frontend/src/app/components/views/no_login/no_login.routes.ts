import { DashboardComponent } from '../default/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const NO_LOGIN_ROUTES = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }
];