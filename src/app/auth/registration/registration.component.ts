import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
    selector: 'detectives-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;

    constructor(
        private title: Title,
        private router: Router
    ) {
        title.setTitle('Регистрация');
    }

    ngOnInit() {
        this.registrationForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl(null, [Validators.required]),
            name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
            agree: new FormControl(false, [Validators.requiredTrue])
        });
    }

    onSubmit() {

    }

}
