import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [
  { path: 'register' , component: RegisterComponent},
  { path: 'login' , component: LoginComponent},
  { path: '**' , component: NopagesfoundComponent },
]

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
