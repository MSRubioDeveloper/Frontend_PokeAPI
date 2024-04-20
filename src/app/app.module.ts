import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    AppRoutingModule,

    //HttpModule
    HttpClientModule,
    RouterModule,
    //Toastr
    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
