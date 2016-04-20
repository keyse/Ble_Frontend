import {inject} from 'aurelia-dependency-injection';
//import {Lookups} from './lookups';
//import {createEntityManager} from '../entity-manager-factory';
import {ValidationGroup} from 'aurelia-validation';
import {mustBeEmpty} from './validation/custom-validation-rules';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  constructor(events) {
    //this.lookups = lookups;
    ValidationGroup.prototype.mustBeEmpty = mustBeEmpty;
    // subscribe to the router's navigation complete event.
    events.subscribe('router:navigation:complete', this.navigationComplete);
  }

  configureRouter(config, router) {
    config.title = 'Bole International';
    config.map([
      { route: '', redirect: 'customers' },
      //{ route: 'orders',    moduleId: './orders/orders-section',       nav: true, title: 'Orders' },
      { route: 'customers', moduleId: './customers/customers-section', nav: true, title: 'Transfers' },
       { route: 'products', moduleId: './products/product-list', nav: true, title: 'Products' },
       { route: 'wizard', moduleId: './wizards/home', nav: true, title: 'Wizard' },
     // { route: 'employees', moduleId: './employees/employees-section', nav: true, title: 'Employees' },
      //{ route: 'about',     moduleId: './about',                       nav: true, title: 'About' },
    ]);
    this.router = router;
  }

  //activate() {
   // return  true; //createEntityManager();
 // }

  navigationComplete(navigationInstruction) {
    // Enable the materialize "waves" effect on the new page.
    Waves.displayEffect()

    // Track page-views with google-analytics.
    //ga('send', 'pageview', '/' + navigationInstruction.fragment);
  }
}
