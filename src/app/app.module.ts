import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/modules/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { LayoutService } from './shared/services/layout.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './shared/services/products.service';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    UserModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    LayoutService,
    AuthService,
    AuthInterceptorService,
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
