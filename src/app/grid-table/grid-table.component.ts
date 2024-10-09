import { Component } from '@angular/core';
import { ItemSelectionColumns } from './grild-table-column';
import { ColDef } from 'ag-grid-community'

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss'],

})
export class GridTableComponent {
  columnData: ColDef[] = ItemSelectionColumns

  rowData = [
    {
      make: "Tesla", model: 5, price: 64950, electric: true
    },
    { make: "Ford", model: 7, price: 33850, electric: false },
    { make: "Toyota", model: 9, price: 29600, electric: false },
  ]
}
