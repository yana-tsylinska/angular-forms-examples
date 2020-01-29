import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { SubscriptionReactiveFormComponent } from './subscription-reactive-form/subscription-reactive-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionFormComponent,
    SubscriptionReactiveFormComponent,
    ChangePasswordComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
