import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/Image';
import { ListImagService } from 'src/app/servess/list-imag.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
    images: Image[] = [];
  
    constructor(private listImageService: ListImagService) {}
  
    ngOnInit(): void {
      this.listImageService.getListImages().subscribe(
        (data) => {
          this.images = data;
        },
        (error) => {
          console.error('Error fetching images', error);
        }
      );
    }

}
