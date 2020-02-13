import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {AuthModule} from './auth/auth.module';
import {UserService} from './shared/services/user.service';
import {AuthService} from './shared/services/auth.service';
import {AuthGuard} from './shared/services/auth.guard';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AuthModule,
        AppRoutingModule
    ],
    providers: [UserService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
