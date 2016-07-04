/* global malarkey:false, moment:false */

import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';

angular.module('testProject', ['ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr'])
  .config(routerConfig)
  .controller('MainController', MainController);
