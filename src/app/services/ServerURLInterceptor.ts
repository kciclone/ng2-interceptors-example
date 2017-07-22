import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import { Injectable } from '@angular/core'
import { XHRBackend, RequestOptions, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { CommonService } from '../services/index';

@Injectable()
export class ServerURLInterceptor implements Interceptor  {
    //Interceptor for request
    constructor(private commonService: CommonService) { }
    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        // Do whatever with request: get info or edit it
        this.commonService.displayLoader(true);
        let headers = new Headers();
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var lastword = request.url.split("/").pop();
        console.log(lastword);
        if (lastword != 'addTraining' && lastword != 'editTraining') {
            headers.append('Content-Type', 'application/json');
            if (currentUser && currentUser.result.user.access_token) {
                //For Admin language code is fixed 
               headers.append('AccessToken', currentUser.result.user.access_token );
               // headers.append('responseType','arraybuffer');
            }
            
        }
        let options = new RequestOptions({ headers: headers, });
        request.options.headers = headers;
        return request;
      
    }

    //Interceptor for response
    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        // Do whatever with response: get info or edit it
       this.commonService.displayLoader(false);
        return response;
    }


    
   
}
