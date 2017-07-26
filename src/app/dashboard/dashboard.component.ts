import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Data } from '../data';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
// import {MdIconRegistry} from '@angular/material';



@Component({
  moduleId: module.id,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DataService]
})
export class DashBoardComponent {
  // title = 'app';
   selectedOption: string;
   data: Data[];
   userFilter: any ={ title: }

  constructor( private dataService: DataService , private router : Router,public dialog: MdDialog  ){

  }
  ngOnInit(): void{
    this.dataService.getData()
        .subscribe(data => this.data = data);
        console.log(this.data);


  }
  // edit(){
  //     this.router.navigate(['./edit/edit']);
  //     // alert("hello")
  // }
  delete(i){

    this.data.splice(i,1);
    console.log(this.data);
  }
  openDialog(dajn) {
    let dialogRef = this.dialog.open(ViewDialog);
    dialogRef.componentInstance.id = dajn.id;
    dialogRef.componentInstance.title = dajn.title;
 }

 openCopyDialog(dajn) {
   let dialogRef = this.dialog.open(CopyDialog);
 }
 suspend(i){
  if(this.data[i].susp==0){
    this.data[i].susp=1;
  }
  else{
    this.data[i].susp=0;
  }
 }


}
@Component({
  selector: 'view-dialog',
  templateUrl: 'view-dialog.html',
})
export class ViewDialog{
  id: number;
  title: string;
  constructor(public dialogRef: MdDialogRef<ViewDialog>) {}
}

@Component({
  selector: 'copy-dialog',
  templateUrl: 'copy-dialog.html',
})
export class CopyDialog{
  constructor(public dialogRef: MdDialogRef<CopyDialog>) {}
}
