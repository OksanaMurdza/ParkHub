import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import {User} from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

    private decoded: User;

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const token = localStorage.getItem('TOKEN');
        if (token) {
            this.decoded = jwt_decode(token);
            return this.decoded.role === 'MANAGER';
        } else {
            return false;
        }
    }
}
