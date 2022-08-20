// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //LOCAL
  production: false,
  name: "Local",
  severUrl: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl',
  firebase : {
    apiKey: "AIzaSyAslPnsjD6jUMYDoFxj1iSHTfmabZltXIE",
    authDomain: "bancoroleplayinggamemello.firebaseapp.com",
    projectId: "bancoroleplayinggamemello",
    storageBucket: "bancoroleplayinggamemello.appspot.com",
    messagingSenderId: "505012578766",
    appId: "1:505012578766:web:88bcff553157042943e39f",
    measurementId: "G-LERT091MDY"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
