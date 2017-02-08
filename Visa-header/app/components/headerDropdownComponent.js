app.directive('headerDropdownComponent', headerDropdownComponent);

function headerDropdownComponent() {
    var directive = {
        link: link,
        templateUrl: 'app/templates/headerDropdownComponent.html',
        restrict: 'E',
        scope: {
            subNav: '='
        },
        controller: HeaderDropdownComponent,
        controllerAs: 'vm',
        bindToController: true,
        replace:true
    };
    return directive;

    function link(scope, element, attrs) {

    }
}
HeaderDropdownComponent.$injector = [];

function HeaderDropdownComponent(){
console.log('here sublinks', this.subNav);
}

