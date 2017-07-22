import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class CommonService {
    displayloader : boolean = false;
     displayLoader(status){
this.displayloader = status;
}


     //Success callback
    public extractData(res: Response) {
        let body: any = res.json();
        if (body.statusCode === 200 && body.success == 1) {
            return body;
        } else {
            throw new Error(body.message);
        }
    }

    //Error callback
   public handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
   //debugger;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    alert(errMsg);
    return Observable.throw(errMsg);
  }

}
