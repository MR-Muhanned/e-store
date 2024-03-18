import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private images: string[] = ['assets/home/10.png', 'assets/home/1.png','assets/home/2.png'];
  public currentImage: string = this.images[0];
  private imageIndex: number = 0;
  private intervalSubscription: Subscription | undefined;

  ngOnInit(): void {
    const interval$ = interval(3000); // تحديث الصورة كل 3 ثواني
    this.intervalSubscription = interval$.subscribe(() => this.updateImage());
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  private updateImage(): void {
    this.imageIndex = (this.imageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.imageIndex];
  } 

  

}
