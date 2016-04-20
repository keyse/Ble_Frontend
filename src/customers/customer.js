import {EntityViewModel} from '../entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {CustomerService} from './customer-service';
//import {Lookups} from '../lookups';

@inject(CustomerService)
export class Customer extends EntityViewModel {
  constructor(service) {
    super(service);
  }

  get title() {
    return  'Transfer';
  }
}
