import { AddAircraftComponent } from './views/add-aircraft/add-aircraft.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading:boolean = false;
  tasks = []
  stagesNames = ['Enqueue', 'Launch'];
  stagesTasks = [];
  constructor(
    public dialog: MatDialog,
  ) {
    for (let i = 0; i < this.stagesNames.length; ++i) {
      this.stagesTasks.push([]);
    }
   }

  ngOnInit(): void {
    this.loading = true;
  }

  add(){
    for (let task of this.tasks) {
      const stageId = task.stage;
      this.stagesTasks[stageId].push(task);
    }
  }

  addAircraft(): void {
    const dialogRef = this.dialog.open(AddAircraftComponent, {
      width: '550px',
      panelClass: 'custom-dialog',
      disableClose: true,
      hasBackdrop:true
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        result.stage = 0;
        result.typeId = result.type == 'Passenger' ? 1 : 0;
        result.sizeId =  result.size == 'Large' ? 1 : 0;
        this.stagesTasks[0].push(result);
        const passenger = this.stagesTasks[0].filter(x => x.typeId === 1);
        const cargo = this.stagesTasks[0].filter(x => x.typeId === 0);
        this.stagesTasks[0] = [...passenger.sort(this.sortCargoBySize), ...cargo.sort(this.sortCargoBySize)];
      }
    });
  }

  sortCargoBySize( a, b ) {
    if (a.sizeId > b.sizeId ){
      return -1;
    }
    if (a.sizeId < b.sizeId ){
      return 1;
    }
    return 0;
  }

  launch(val){
    this.stagesTasks[0] = this.stagesTasks[0].filter(x => x.name !== val.name);
    this.stagesTasks[1].push({...val,stage:1});
  }
}
