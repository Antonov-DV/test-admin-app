import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, { API } from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);

Amplify.configure({
   API: {
       graphql_endpoint: 'https://...',
       graphql_headers: async () => ({
           'x-api-key': '...'
       })

   }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
