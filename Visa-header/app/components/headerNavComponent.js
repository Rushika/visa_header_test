app.directive('headerNavComponent', headerNavComponent);

function headerNavComponent() {
    var directive = {
        link: link,
        templateUrl: 'app/templates/headerNavComponent.html',
        restrict: 'E',
        scope: {
            navigationLinks: '='
        },
        controller: HeaderNavComponent,
        controllerAs: 'vm',
        bindToController: true,
        replace:true
    };
    return directive;
    function link(scope, element, attrs) {


    }
}
HeaderNavComponent.$injector = [];
function HeaderNavComponent() {
    var vm = this;
    vm.selected = -1;
    vm.selectMenu = selectMenu;
    vm.subLinks = [];

    function selectMenu(i){
        vm.subLinks = vm.navigationLinks[i].subLinks;
        vm.selected = i;
    }
}

