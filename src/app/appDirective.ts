export const AppDirective : angular.IComponentOptions = {
    template: require('../templates/app.html').default,
    controller: class AppController {
        test: number;
        url: string;

        constructor(){
        }

        $onInit(){
            this.url = 'https://github.com/preboot/angular-webpack';
            this.test = 2;
        }
    }
};