import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CameraComponent } from './camera/camera.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServiceComponent},
    {path:'contact',component:ContactComponent},
    {path:'contactModal',component:ContactModalComponent},
    {path:'camera',component: CameraComponent},
    {path:'upload-images',component:UploadImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
