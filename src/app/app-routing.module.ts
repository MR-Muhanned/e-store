import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'; 
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CategoryComponent } from './component/category/category.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ProductDetelsComponent } from './component/product-detels/product-detels.component';
import { ProductComponent } from './component/product/product.component';
import { AdminProductComponent } from './component/admin/product/AdminProduct.component';
import { GuardService } from './Guard/guard.service';

const routes: Routes = [
   {path :'home', component :HomeComponent},
   {path :'logIn',component:LoginComponent},
   {path :'about',component:AboutUsComponent},
   { path: 'categories', component: CategoryComponent },
   {path :'product-detels/:id',component:ProductDetelsComponent},
   { path: 'category-details/:id', component:  CategoryComponent},
   {path:'cart',component:CartComponent},
   {path:"admin_product",component:AdminProductComponent },// canActivate:[GuardService]
   {path :'ss', component :HomeComponent,canActivate:[GuardService]},
   {path:'',component:CartComponent},
   {path:'',redirectTo:'home',pathMatch:'full'}, 
   {path:'**',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
