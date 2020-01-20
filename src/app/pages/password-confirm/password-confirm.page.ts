import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-password-confirm',
    templateUrl: './password-confirm.page.html',
    styleUrls: ['./password-confirm.page.scss'],
})
export class PasswordConfirmPage implements OnInit {

    protected confirmForm: FormGroup;

    constructor(private userService: AuthService, private router: Router, private formBuilder: FormBuilder) {
        this.confirmForm = this.formBuilder.group({
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    confirm() {
        const password = this.confirmForm.value.password;
        this.userService.completePwd(password).then(user => {
                this.router.navigate(['/home']);
            }
        );
    }

}
