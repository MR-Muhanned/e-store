import { Injectable } from '@angular/core';
import { Route, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private _router: Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    console.log("canActvate");
    alert("😌 راح نتزاعل ارجع احسن ما نتزاعل");
    this._router.navigate(["/"]);
    return false;
  }
}
