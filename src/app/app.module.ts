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
import { MealsModule } from './meals/meals.module';
import { MealsService } from './shared/services/meals.service';
import { FoodModule } from './food/food.module';
import { FoodLogService } from './shared/services/food-log.service';




@NgModule({
  declarations: [
    AppComponent
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
    AppRoutingModule,
    MealsModule,
    FoodModule
  ],
  providers: [
    LayoutService,
    AuthService,
    AuthInterceptorService,
    ProductsService,
    MealsService,
    FoodLogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
