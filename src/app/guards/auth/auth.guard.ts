import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userService: AuthService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        let url: string = state.url;
        //return true;
        return this.checkLogin(url);
    }

    async checkLogin(url: string): Promise<boolean> {
        const isLoggedIn = await this.userService.getIsLogged();
        if (isLoggedIn) {
            return true;
        }

        this.userService.redirectUrl = url;

        this.router.navigate(['/login']);
        return false;
    }

}
