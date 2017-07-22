import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Config } from '../services/config';
import { CommonService } from '../services/common.service';
import { InterceptorService } from 'ng2-interceptors';

@Injectable()
export class UserService {
    constructor(private http: InterceptorService,private commonService: CommonService) { }

    //FUNCTION TO GET LIST OF ALL USERS
    getAll(name: string = null, page: number = 1) {
         return this.http.post(Config.BASE_API_URL + '/users-list', { name: name, page: page}, {
        })
            .map(this.commonService.extractData)
            .catch(this.commonService.handleError)
    }


}