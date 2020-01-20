import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Auth} from 'aws-amplify';


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    public static STATE_GUEST = 'GUEST';
    public static STATE_LOGGED = 'LOGGED';
    public static STATE_NEW_PASSWORD_REQUIRED = 'NEW_PASSWORD_REQUIRED';
    public static STATE_CONFIRM_REQUIRED = 'CONFIRM_REQUIRED';

    protected userId: any = null;
    public loggedIn: any = false;
    protected session;
    protected state: any;
    protected user: any = null; // CongitoUser

    public redirectUrl: string;

    constructor() {
        this.loggedIn = false;
        this.setState(AuthService.STATE_GUEST);
    }

    protected setState(state) {
        this.state = state;
    }

    public getState() {
        return this.state;
    }


    public async getIsLogged() {
        try {
            const user = await Auth.currentUserPoolUser();

            this.loggedIn = true;
            this.user = user;

            return true;
        } catch (err) {
            this.user = null;
            this.loggedIn = false;
            return false
        }
    }

    public getSession() {
        Auth.currentSession().then(session => {
            this.session = session;
        });
    }

    public getUser() {
        return this.user;
    }

// TODO: make user id getter
    protected getUserId(user) {
        return 1;
    }

    public login(username, password) {

        return new Promise((resolve, reject) => {
            Auth.signIn(username, password)
                .then(user => {
                        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                            this.user = user;
                            this.setState(AuthService.STATE_NEW_PASSWORD_REQUIRED);
                        }

                        this.user = user;
                        this.userId = this.getUserId(user);
                        this.loggedIn = true;
                        resolve(user);
                    }
                )
                .catch(err => {
                        reject(err);
                    }
                );
        });
    }

    public logout(): void {
        this.loggedIn = false;
        Auth.signOut()
            .then(data => {
                this.user = null;
                this.loggedIn = false;
            })
            .catch( err => {
            });
    }

    public changePassword(user, oldPassword, newPassword) {
    }

    public completePwd(pwd) {
        return Auth.completeNewPassword(this.user, pwd, {})
            .then(user => {
            })
            .catch(err => {
                }
            );
    }

}
