import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {
    user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.user.pipe(map((auth) => {
            if (!auth) {
                this.router.navigateByUrl('/login');
                return false;
            }
            return true;
        })).pipe(take(1));
    }
}