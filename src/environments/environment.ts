// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyAf7_x0guazlbR9pjqfkUhxwfOr2wJmelw",
    authDomain: "firestore-crud-of-users-9a145.firebaseapp.com",
    databaseURL: "https://firestore-crud-of-users-9a145.firebaseio.com",
    projectId: "firestore-crud-of-users-9a145",
    storageBucket: "firestore-crud-of-users-9a145.appspot.com",
    messagingSenderId: "697289795538"
  }
};
