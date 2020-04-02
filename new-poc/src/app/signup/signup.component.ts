import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { PmoServiceService } from '../pmo-service.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
   
   employee: Employee = new Employee();
  submitted = false;

  constructor(private pmoServiceService: PmoServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.pmoServiceService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
   // this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  //gotoList() {
    //this.router.navigate(['/employees']);
  }
