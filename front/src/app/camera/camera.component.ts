import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AnyArray } from 'mongoose';

import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { image } from '../modal/camera';
import { CameraService } from '../service/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  imagedata: any
  image!: any
  private trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Capture image';
  readonly url = "http://localhost:5000/images";
  webcamImage!: WebcamImage;
  imageName!: string;
  imageFormat: string | undefined;
  arr: any
  uintArray:any


  constructor(private cameraService: CameraService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  get $trigger(): Observable<void> {
    return this.trigger.asObservable()
  }

  captureImage() {
    this.trigger.next()
  }

  snapshot(event: WebcamImage) {
    console.log('event', event);
    this.previewImage = event.imageAsDataUrl;
    console.log(this.previewImage)
    this.arr = this.previewImage.split(",");
    console.log('aerr', this.arr);
    // var binaryImg = atob(this.arr[1]);
    // var length = binaryImg.length;
    // var arrayBuffer = new ArrayBuffer(length);
    // this.uintArray = new Uint8Array(arrayBuffer);
    // for (var i = 0; i < length; i++) {
    //   this.uintArray[i] = binaryImg.charCodeAt(i);
    // }
    // console.log('rrrrrr',this.uintArray)
    this.btnLabel = 'Re capture image'
  }

  // snapshot(webcamImage: WebcamImage) {
  //   this.webcamImage = webcamImage;
  //   const arr = this.webcamImage.imageAsDataUrl.split(",");
  //   console.log('aerr',arr)
  //   const mime = arr[0].match(/:(.*?);/)![1];
  //   const bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   const u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   const file: File = new File([u8arr], this.imageName, { type: this.imageFormat })
  //   console.log(file);  }
  // snapshot(event: WebcamImage){
  //   console.log(event);
  //   // const file = (event.target as HTMLInputElement).files[0];
  //   // const target= event.target as mediaa;
  //   // const file: File = (target.files as FileList)[0];
  //   // const target =(event.imageAsDataUrl  as unknown as HTMLInputElement )
  //   // const file: File = (target as unknown as FileList)[0]; 

  //   // this.imagedata = event.imageAsDataUrl;
  // //  this.previewImage = event.target.files[0];
  // //   const reader = new FileReader();
  // //   reader.onload = () => {
  // //     this.imagedata = reader.result as string;
  // //   };
  // //   reader.readAsDataURL(file);
  // //   console.log(file)

  //   // console.log('preview',this.previewImage)

  //   this.btnLabel ='Re capture image'

  // }

  // onFileSelect(event: Event) {
  //   const target= event.target as HTMLInputElement;
  //   const file: File = (target.files as FileList)[0];
  //   // const file = target.files[0];
  //   // const file  = (<HTMLInputElement>event.target).files[0];

  //   const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  //   if (file && allowedMimeTypes.includes(file.type)) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.previewImage = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }



  onSubmit() {
    let formdata = new FormData();
    formdata.append("image", this.arr[1]);

    // console.log('preview',this.previewImage)
    this.http.post('http://localhost:5000/images', formdata, { responseType: 'text' })
    
      .subscribe((response) => {
    console.log('hfhhhhhhhhhhhhhhh')

        console.log('response received is ', (response));
      })
    // console.log(this.previewImage);
    // this.cameraService.addImage(this.image)

  }
}

