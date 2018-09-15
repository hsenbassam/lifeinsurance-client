'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">lifeinsurance-client documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AdminModule-633454fcbe9be8ee27b940ffccab05d0"' : 'data-target="#xs-components-links-module-AdminModule-633454fcbe9be8ee27b940ffccab05d0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AdminModule-633454fcbe9be8ee27b940ffccab05d0"' : 'id="xs-components-links-module-AdminModule-633454fcbe9be8ee27b940ffccab05d0"' }>
                                        <li class="link">
                                            <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminOrdersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminUsersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminUserModule.html" data-type="entity-link">AdminUserModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AdminUserModule-8ec39d2d1f6bf7e98a20d349ce317c0c"' : 'data-target="#xs-components-links-module-AdminUserModule-8ec39d2d1f6bf7e98a20d349ce317c0c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AdminUserModule-8ec39d2d1f6bf7e98a20d349ce317c0c"' : 'id="xs-components-links-module-AdminUserModule-8ec39d2d1f6bf7e98a20d349ce317c0c"' }>
                                        <li class="link">
                                            <a href="components/UserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserFormComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserItemComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' : 'data-target="#xs-components-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' : 'id="xs-components-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' }>
                                        <li class="link">
                                            <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NoAccessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoAccessComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PasswordChangeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasswordChangeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PasswordRecoveryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasswordRecoveryComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ShoppingCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShoppingCartComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserPoliciesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserPoliciesComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' : 'data-target="#xs-directives-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' : 'id="xs-directives-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' }>
                                        <li class="link">
                                            <a href="directives/ScrollToTopDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollToTopDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' : 'data-target="#xs-injectables-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' : 'id="xs-injectables-links-module-AppModule-51fa043fed2ef7fdf28133f2f5e07dea"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaypalPaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PaypalPaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegisterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>RegisterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RoleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>RoleService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShoppingCartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ShoppingCartService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TermLifeSimulatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TermLifeSimulatorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UniversalLifeSimulatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UniversalLifeSimulatorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WholeLifeSimulatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>WholeLifeSimulatorService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PaymentModule.html" data-type="entity-link">PaymentModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PaymentModule-e4812a16735428cac9b42b04770dd173"' : 'data-target="#xs-components-links-module-PaymentModule-e4812a16735428cac9b42b04770dd173"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PaymentModule-e4812a16735428cac9b42b04770dd173"' : 'id="xs-components-links-module-PaymentModule-e4812a16735428cac9b42b04770dd173"' }>
                                        <li class="link">
                                            <a href="components/PaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentConfirmationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentConfirmationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentFailureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentFailureComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentProcessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentProcessComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaymentSuccessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentSuccessComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PaymentRoutingModule.html" data-type="entity-link">PaymentRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ProductsModule.html" data-type="entity-link">ProductsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ProductsModule-0c4198f4d23cd3934e6f6b5be0339287"' : 'data-target="#xs-components-links-module-ProductsModule-0c4198f4d23cd3934e6f6b5be0339287"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ProductsModule-0c4198f4d23cd3934e6f6b5be0339287"' : 'id="xs-components-links-module-ProductsModule-0c4198f4d23cd3934e6f6b5be0339287"' }>
                                        <li class="link">
                                            <a href="components/AllProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AllProductsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProductCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductCardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProductItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TermLifeProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermLifeProductComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UniversalLifeProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UniversalLifeProductComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/WholeLifeProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WholeLifeProductComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ProductsRoutingModule.html" data-type="entity-link">ProductsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/QuoteModule.html" data-type="entity-link">QuoteModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-QuoteModule-c5dfc0373f8f3d16df812288c146f353"' : 'data-target="#xs-components-links-module-QuoteModule-c5dfc0373f8f3d16df812288c146f353"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-QuoteModule-c5dfc0373f8f3d16df812288c146f353"' : 'id="xs-components-links-module-QuoteModule-c5dfc0373f8f3d16df812288c146f353"' }>
                                        <li class="link">
                                            <a href="components/CountrySelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountrySelectComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OccupationSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OccupationSelectComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/QuoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuoteComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/QuoteResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuoteResultComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/QuoteRoutingModule.html" data-type="entity-link">QuoteRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="classes/Checkout.html" data-type="entity-link">Checkout</a>
                    </li>
                    <li class="link">
                        <a href="classes/DataService.html" data-type="entity-link">DataService</a>
                    </li>
                    <li class="link">
                        <a href="classes/DateFormat.html" data-type="entity-link">DateFormat</a>
                    </li>
                    <li class="link">
                        <a href="classes/ECommercePage.html" data-type="entity-link">ECommercePage</a>
                    </li>
                    <li class="link">
                        <a href="classes/Order.html" data-type="entity-link">Order</a>
                    </li>
                    <li class="link">
                        <a href="classes/Quote.html" data-type="entity-link">Quote</a>
                    </li>
                    <li class="link">
                        <a href="classes/Rates.html" data-type="entity-link">Rates</a>
                    </li>
                    <li class="link">
                        <a href="classes/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/OrderService.html" data-type="entity-link">OrderService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PaypalPaymentService.html" data-type="entity-link">PaypalPaymentService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RegisterService.html" data-type="entity-link">RegisterService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RoleService.html" data-type="entity-link">RoleService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ShoppingCartService.html" data-type="entity-link">ShoppingCartService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TermLifeSimulatorService.html" data-type="entity-link">TermLifeSimulatorService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UniversalLifeSimulatorService.html" data-type="entity-link">UniversalLifeSimulatorService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/WholeLifeSimulatorService.html" data-type="entity-link">WholeLifeSimulatorService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AdminAuthGuard.html" data-type="entity-link">AdminAuthGuard</a>
                </li>
                <li class="link">
                    <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
