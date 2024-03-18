import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './component/heder/heder.component';
import { HomeComponent } from './component/home/home.component';
import { FoterComponent } from './component/foter/foter.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CategoryComponent } from './component/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';
import { StarRatingPipe } from './pip/star-rating.pipe';
import { CartComponent } from './component/cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BuiltinType } from '@angular/compiler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/auth/login/login.component';
import { ProductDetelsComponent } from './component/product-detels/product-detels.component';
import { AdminProductComponent } from './component/admin/product/AdminProduct.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TelltaleOnproductsComponent } from './component/admin/product/addProduct/addProduct';
import { UpdateProductComponent } from './component/admin/product/update-product/update-product.component';
import { GuardService } from './Guard/guard.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { VisaComponent } from './component/visa/visa.component';
import { ImgComponent } from './component/img/img.component';
import { RatingModule } from 'ngx-bootstrap/rating';





@NgModule({
  declarations: [
    AppComponent,
    AdminProductComponent,
    HomeComponent,
    FoterComponent,
    AboutUsComponent,
    CategoryComponent,
    ProductComponent, 
    StarRatingPipe,
    CartComponent,
    LoginComponent,
    HederComponent,
    ProductDetelsComponent,
    TelltaleOnproductsComponent,
    UpdateProductComponent,
    VisaComponent,
    ImgComponent,
  
    
    

    
    
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    LazyLoadImageModule,
    RatingModule.forRoot(),
   
    
    

  ],
  providers: [GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
