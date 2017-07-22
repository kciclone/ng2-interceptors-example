import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { UserService, ServerURLInterceptor, CommonService } from './services/index';

import { InterceptorService } from 'ng2-interceptors';
import { XHRBackend, RequestOptions } from '@angular/http';
export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor: ServerURLInterceptor) { // Add it here
    let service = new InterceptorService(xhrBackend, requestOptions);
    service.addInterceptor(serverURLInterceptor); // Add it here
    return service;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    CommonService,
    ServerURLInterceptor, 
        {
            provide: InterceptorService,
            useFactory: interceptorFactory,
            deps: [XHRBackend, RequestOptions, ServerURLInterceptor] // Add it here, in the same order as the signature of interceptorFactory
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
