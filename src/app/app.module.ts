import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';

// Rutas
import { APP_ROUTES } from './app.routes';

//servcios
ServiceModule
// modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { IncrementadorComponent } from './componentes/incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
