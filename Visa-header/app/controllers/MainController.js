app.controller('MainController', MainController);
MainController.$injector = [];
function MainController() {
    var vm = this;
    vm.navigationLinks = [
        {
            link : 'Pay With Visa',
            subLinks : [
                {
                    icon:'visa-icon visa-icon-visa-checkout',
                    link:'visa Checkout'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'find a card'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'visda offers + perks'
                }
            ]
        },
        {
            link: 'Partner With Us',
            subLinks : [
                {
                    icon:'fa fa-cc-visa',
                    link:'Visa ready'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'payment technology'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'visda offers + perks'
                }
            ]
        },
        {
            link: 'Run Your Business',
            subLinks : [
                {
                    icon:'fa fa-cc-visa',
                    link:'visa Checkout'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'find a card'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'visda offers + perks'
                }
            ]

        },
        {
            link: 'Visa Everywhere',
            subLinks : [
                {
                    icon:'fa fa-cc-visa',
                    link:'visa Checkout'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'find a card'
                },
                {
                    icon:'fa fa-cc-visa',
                    link:'visda offers + perks'
                }
            ]
        }
    ]
}
