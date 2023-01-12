import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { map, Observable, Subject } from 'rxjs';
import { image } from '../modal/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private images: image[] = [];
  private images$ = new Subject<image[]>();
  readonly url = "http://localhost:5000/images";

  constructor(private http : HttpClient) { }



  addImage(image:File):void{
    const imageData= new FormData();
    imageData.append("image",image);
    console.log(image,'jjjjjjjj')
     this.http.post(this.url,imageData).subscribe(res=>{
      console.log(res)

    })
    //   const image : image ={
    //     camera: imageData.image.camera
    //   }
    //   this.images.push(image);
    //   this.images$.next(this.images)
    // })
  // }
}
}

