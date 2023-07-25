import { Component } from '@angular/core';

@Component({
  selector: 'app-date-selection',
  templateUrl: './date-selection.page.html',
  styleUrls: ['./date-selection.page.scss'],
})
export class DateSelectionPage {
  fromDate: string = ''; // Initialize the property with an empty string
  toDate: string = ''; // Initialize the property with an empty string

  onFromDateChanged(event: any) {
    // Use 'any' as the type for the event, as Ionic might not be strictly using CustomEvent<any>
    this.fromDate = event.detail.value;
  }

  onToDateChanged(event: any) {
    // Use 'any' as the type for the event, as Ionic might not be strictly using CustomEvent<any>
    this.toDate = event.detail.value;
  }

  onDateSelection() {
    // Handle the selected dates here
    console.log('From Date:', this.fromDate);
    console.log('To Date:', this.toDate);
  }
}
