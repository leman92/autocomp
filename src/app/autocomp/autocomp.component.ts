import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, filter, Subject, tap} from "rxjs";

@Component({
  selector: 'app-autocomp',
  templateUrl: './autocomp.component.html',
  styleUrls: ['./autocomp.component.css']
})
export class AutocompComponent implements OnInit {

  title = 'autocomplete';

  countries = ["Greece","USA","China","N.Korea"];

  filteredOptions : any;


  // @ts-ignore
  formGroup: FormGroup;
  constructor( private fb : FormBuilder){}

  ngOnInit(){
    this.initForm();
    this.getNames();
  }

  initForm(){
    this.formGroup = this.fb.group({
      'country' : ['']
    })

    // @ts-ignore
    this.formGroup.get('country').valueChanges.pipe(
      filter(e => {
        return !String(e).toLowerCase().includes('gr')
      }),
      debounceTime(1000),
      tap(e => {
        console.log(e)
      })
    ).subscribe(response => {
      if(response && response.length > 2){
        this.filterData(response);
      }else{
        this.filteredOptions = [];
      }

    })
  }

  filterData(enteredData: string){
    this.filteredOptions = this.countries.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){

    this.filteredOptions = this.countries

  }
}
