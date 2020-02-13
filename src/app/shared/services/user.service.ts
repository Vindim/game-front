import {Api} from '../core/api';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UserService extends Api {
    constructor(public http: HttpClient) {
        super(http);
    }

    getUserByEmail(email: string): Observable<User[]> {
        return this.get(`users?email=${email}`);
    }

    createNewUser(user: User): Observable<User> {
        return this.post(`users`, user);
    }
}
