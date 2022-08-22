import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {AngularFireModule} from '@angular/fire/compat';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    MainComponent,
  ],
 
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
