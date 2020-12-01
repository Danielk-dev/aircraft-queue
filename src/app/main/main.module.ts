import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { AddAircraftComponent } from './components/home/views/add-aircraft/add-aircraft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [],
  imports: [
    MainRoutingModule,
    FormsModule
  ],
  declarations: [AddAircraftComponent],
})
export class MainModule { }
