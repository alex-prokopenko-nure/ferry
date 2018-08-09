import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatIconModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatTreeModule,
  MatTooltipModule,
  MatTabsModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSelectModule,
  MatRippleModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatInputModule,
  MatMenuModule,
  MatGridListModule,
  MatExpansionModule,
  MatDialogModule,
  MatDividerModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { FerryDetailsComponent } from './ferry-details/ferry-details.component';
import { SimulationComponent } from './simulation/simulation.component';

@NgModule({
  declarations: [AppComponent, FerryDetailsComponent, SimulationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatTreeModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
