import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import{ ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Data } from '../data';
import 'rxjs/add/operator/map';
import { MdDialog, MdDialogRef } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  moduleId: module.id,
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[DataService]
})
export class EditComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  id: number;
  data:Data[];

 constructor(private route : ActivatedRoute,private dataService: DataService, public dialog: MdDialog){}
  public model = {
    fromEmail: '',
    to: '',
    mailToBeShown: '',
    fromName: '',
    replyToAddress: ''

  } ;
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(EMAIL_REGEX)]);
  ngOnInit ():void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getData()
        .subscribe(data => {
          this.data = data
          for(let i of this.data) {
            if(this.id == i.id) {
              this.model['fromEmail'] = i.title;
            }
          }
        });
        console.log(this.data);

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResult, {
      disableClose: true,
    });
    dialogRef.componentInstance.fromEmail = this.model.fromEmail;
    dialogRef.componentInstance.to = this.model.to;
    dialogRef.componentInstance.mailToBeShown = this.model.mailToBeShown;
    dialogRef.componentInstance.fromName = this.model.fromName;
    dialogRef.componentInstance.replyToAddress = this.model.replyToAddress;
  }
  openSendDialog() {
    let dialogRef = this.dialog.open(DialogSendResult);
  }
  openScheduleDialog() {
    let dialogRef = this.dialog.open(DialogScheduleResult);
  }
}

@Component({
  selector: 'dialog-result',
  templateUrl: 'dialog-result.html',
})
export class DialogResult{
  public fromEmail: string;
  public to: string;
  public mailToBeShown: string;
  public fromName: string;
  public replyToAddress: string;
  constructor(public dialogRef: MdDialogRef<DialogResult>){
  }
}

@Component({
  selector: 'dialog-send-result',
  templateUrl: 'dialog-send-result.html',
})
export class DialogSendResult{
  constructor(public dialogRef:MdDialogRef<DialogSendResult>){}
}

@Component({
  selector: 'dialog-schedule-result',
  templateUrl: 'dialog-schedule-result.html',
})
export class DialogScheduleResult{
  constructor(public dialogRef:MdDialogRef<DialogScheduleResult>){}
}
