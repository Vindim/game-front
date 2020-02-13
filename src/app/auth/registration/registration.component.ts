import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';

@Component({
    selector: 'detectives-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;

    constructor(
        private title: Title,
        private router: Router,
        private userService: UserService
    ) {
        title.setTitle('Регистрация');
    }

    ngOnInit() {
        this.registrationForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email], this.checkEmailExists.bind(this)),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl(null, [Validators.required]),
            name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
            agree: new FormControl(false, [Validators.requiredTrue])
        }, this.comparePasswords());
    }

    onSubmit() {
        const {email, password, name} = this.registrationForm.value;
        const user = new User(email, password, name);

        this.userService.createNewUser(user).subscribe(() => {
            this.router.navigate(['/login'], {queryParams: {nowCanLogin: true}});
        });
    }

    comparePasswords(): ValidationErrors | null {
        return (formGroup: FormGroup) => {
            const password = formGroup.controls.password;
            const confirm = formGroup.controls.confirmPassword;

            if (confirm.errors && !confirm.errors.mustMatch) {
                return;
            }

            if (password.value !== confirm.value) {
                return {mustMatch: true};
            }
            else {
                return null;
            }
        };
    }

    checkEmailExists(control: FormControl): Promise<any> {
        return new Promise((resolve) => {
            this.userService.getUserByEmail(control.value).subscribe((user: User[]) => {
                if (user) {
                    resolve({exists: true});
                }
                else {
                    resolve(null);
                }
            });
        });
    }

}
