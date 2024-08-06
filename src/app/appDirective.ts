export const AppDirective : angular.IComponentOptions = {
    template: require('../templates/app.html').default,
    controller: class AppController {
        url: string;
        constructor(){            
            this.url = 'https://github.com/preboot/angular-webpack';
        }

        $onInit(){
            // debugger;
        }
    }
};