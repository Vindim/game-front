import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class Api {
    baseUrl = 'http://localhost:3000/';

    constructor(public http: HttpClient) {
    }

    private getUrl(url: string): string {
        return this.baseUrl + url;
    }

    public get(url: string): Observable<any> {
        return this.http.get(this.getUrl(url)).pipe(map(res => res));
    }

    public post(url: string, data: any = {}): Observable<any> {
        return this.http.post(this.getUrl(url), data).pipe(map(res => res));
    }

    public put(url: string, data: any = {}): Observable<any> {
        return this.http.put(this.getUrl(url), data).pipe(map(res => res));
    }

    public delete(url: string, data: any = {}): Observable<any> {
        return this.http.delete(this.getUrl(url), data).pipe(map(res => res));
    }
}
