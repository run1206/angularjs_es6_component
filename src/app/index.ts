import * as angular from 'angular';

import '../style/app.css';
import '../images/logo.png';

import { AppDirective } from './appDirective';

class AppCtrl {
  public url: string;
  public test: number;

  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }

  $onInit(){
    // debugger;

    this.test = 2;
    console.log(this.test);
  }
}

export default angular.module('app', [])
  .component('appDir', AppDirective)
  .controller('AppCtrl', AppCtrl);

  
angular.bootstrap(document.getElementById("root"), ['app']);