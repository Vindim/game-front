import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {UserService} from '../../shared/services/user.service';

@Component({
    selector: 'detectives-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    message: Message;

    constructor(
        private router: Router,
        private title: Title,
        private route: ActivatedRoute,
        private authService: AuthService,
        private userService: UserService
    ) {
        title.setTitle('Вход в систему');
    }

    ngOnInit() {
        this.message = new Message('', 'danger');

        this.route.queryParams.subscribe((params: Params) => {
            if (params.nowCanLogin) {
                this.showMessage({text: 'Теперь вы можете зайти в систему', type: 'success'});
            }
            else if (params.accessDenied) {
                this.showMessage({
                    text: 'Необходимо войти в систему',
                    type: 'warning'
                });
            }
        });

        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    onSubmit() {
        const formData = this.loginForm.value;


    }

    private showMessage(message: Message): void {
        this.message = message;
        window.setTimeout(() => {
            this.message.text = '';
        }, 5000);
    }

}
