import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {
  imageData: any;
  newImage: any;
  thumbnail: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/images').subscribe((data) => {
      this.imageData = data
      console.log(this.imageData);

      for (let i = 0; i < this.imageData.images.length; i++) {
        this.newImage = this.imageData.images[i]
      }
      console.log(this.newImage.image.data.data);
      // console.log(this.newImage.image.data);
      let TYPED_ARRAY = new Uint8Array(this.newImage.image.data.data);
      // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
      const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      }, '')
      let base64String = btoa(STRING_CHAR);
      // console.log(base64String);
      
      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + base64String);
      console.log(this.thumbnail);

    })
  }

}
