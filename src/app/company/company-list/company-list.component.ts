import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { CompanyService } from '../company.service';
import { Company } from '../../company';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  // If we return an error from our company.service errorHandler method it will be of type "Observable" so we can no longer type companies$
  // to be of type "FirebaseListObservable" it could be of type "Observable<Error>" You have two options below

  companies$: FirebaseListObservable<Company[]> | Observable<Error>;
  // companies$: Observable<Error>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

}
