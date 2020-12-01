import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.scss']
})
export class AddAircraftComponent implements OnInit {

  aircraft:any = {
    'name' : '',
    'type' : '',
    'size' : ''
  }
  constructor(public dialogRef: MatDialogRef<AddAircraftComponent>) { }

  ngOnInit() {
  }

  onClick(data?: any) {
    this.dialogRef.close(data);
  }

}
