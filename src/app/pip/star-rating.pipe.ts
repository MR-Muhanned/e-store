import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(rating: number): string {
    const filledStarsCount = Math.round(rating);
    const emptyStarsCount = 5 - filledStarsCount;

    return '★'.repeat(filledStarsCount) + '☆'.repeat(emptyStarsCount);
  }
}
