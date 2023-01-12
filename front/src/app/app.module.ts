import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CameraComponent } from './camera/camera.component';
import {WebcamModule} from 'ngx-webcam';

import {HttpClientModule} from '@angular/common/http';
import { UploadImagesComponent } from './upload-images/upload-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent,
    ContactModalComponent,
    CameraComponent,
    UploadImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
