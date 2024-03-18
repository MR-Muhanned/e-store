import { Component, OnInit } from '@angular/core';
import { HederService } from 'src/app/servess/heder.service';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/servess/cart.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {
  searchTerm: string = '';
  products: Product[] = [];
  searchTitle: string = '';
  public totalItem: number = 0;

  constructor(private hederService: HederService, private cartService: CartService) {}

  onSubmit(): void {
    this.hederService.setSearchTerm(this.searchTerm);
  }

  search(): void {
    // Implement search logic using the title
    // Assuming this.products is set with the appropriate data
    const filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchTitle.toLowerCase())
    );

    // Update the array used in displaying products based on the search results
    this.products = filteredProducts;

    // Log the search results
    console.log('Search Results:', filteredProducts);
  }

  ngOnInit(): void {
    // Assuming you want to get the total number of items in the cart
    this.cartService.getProducts().subscribe((res: Product[]) => {
      this.totalItem = res.length;
    });
  }
}
