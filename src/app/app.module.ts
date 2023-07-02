import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { AppDownloadComponent } from './app-download/app-download.component';
import { OrderSectionComponent } from './order-section/order-section.component';
import { FahrerComponent } from './fahrer/fahrer.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    InfoComponent,
    AppDownloadComponent,
    OrderSectionComponent,
    FahrerComponent,
    LocationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
