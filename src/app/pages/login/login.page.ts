import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    protected username ?: string;
    protected password ?: string;

    protected loginForm: FormGroup;

    constructor(private userService: AuthService, private router: Router, private formBuilder: FormBuilder) {
        this.userService = userService;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required])]
        });
    }

    async ngOnInit() {
        const logged = await this.userService.getIsLogged();
        if (logged) {
            this.router.navigate(['/home']);
        }
    }

    login() {
        // this.router.navigateByUrl('home');

        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;

        this.userService.login(this.username, this.password).then(function (user) {
            if (this.userService.getState() === AuthService.STATE_NEW_PASSWORD_REQUIRED) {
                this.router.navigate(['/password-confirm']);
            } else {
                this.username = user.username;
                this.router.navigate(['/home']);
            }
        }.bind(this))
            .catch(err => {
                const message = (!err.message) ? {message: err} : err;
                this.loginForm.setErrors({serverError: message});
            });
    }
}
