import * as angular from 'angular';

import '../style/app.css';
import '../images/logo.png';

import { AppDirective } from './appDirective';

class AppCtrl {
  constructor() {}

  $onInit(){}
}

export default angular.module('app', [])
  .component('appDir', AppDirective)
  .controller('AppCtrl', AppCtrl);

  
angular.bootstrap(document.getElementById("root"), ['app']);