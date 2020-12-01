import { AddAircraftComponent } from './components/home/views/add-aircraft/add-aircraft.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDatepickerModule, MatFormFieldModule, MatIconModule, MatTableModule, MatPaginatorModule, MatCheckboxModule, MatTooltipModule, MatRadioModule, MatNativeDateModule, MatSelectModule, MatInputModule, MatDividerModule, MatTabsModule, MatSliderModule, MatSlideToggleModule, MatStepperModule, MatListModule, MatButtonToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
     MatPaginatorModule,
     MatCheckboxModule,
      MatTooltipModule,
       MatRadioModule,
        MatNativeDateModule,
         MatSelectModule,
          MatInputModule,
          MatDividerModule,
          MatTabsModule, MatSliderModule, MatSlideToggleModule, MatStepperModule, MatListModule, MatButtonToggleModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
  })],
  exports: [RouterModule],
  declarations:[HomeComponent],
  entryComponents:[AddAircraftComponent]
})
export class MainRoutingModule { }
