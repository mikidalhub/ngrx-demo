# DemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

Under construction...

Actually this is a demo application using the ngrx/store library! 
This application already exists in the net but I transformed a little bit to be more elegant!
Patterns used:

    - Reactive x pattern  -> every communication happens via Observables
    - Loose coupling -> each of its components has, or little or no knowledge of the definitions of
      other separate components
    - Single Responsability -> every component or class have responsibility over just their part 
      "A class should have only one reason to change"
    - Functional programming approach
    - Redux / One way data comminication
    
Keywords

    - centralized Store architecture 
    - clean/stateless components, just the store injected and some action dispatch occure
    - using @effect for a smarter server communication -> elegant way for separating the concepts
    - reactive X approach for communications between components -> it happens actually via the store    

Mention: there are some parts that is not used in the app!

## Prerequisites
Update you global CLI to the latest

    1. npm uninstall -g angular-cli
    2. npm install -g @angular/cli

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

 Actually make a change somewhere in the app if the first bundle creation ends with error!
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
Feel free to contact me if you got questions: mikidal@gmail.com 
