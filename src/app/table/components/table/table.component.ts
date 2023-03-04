import { Component, OnInit } from '@angular/core';

import { TableInterface } from 'src/app/table/types/tableItem.interface';

@Component({
  selector: 'mc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  searchValue = '';
  visible = false;
  listOfData: TableInterface[] = [];
  listOfDisplayData = [...this.listOfData];
  // headTable = [
  //   {
  //     name: 'Бренд',

  //   }
  //   'Бренд',
  //   'Артикул',
  //   'Название товара',
  //   'Цена',
  //   'Наличие',
  //   'Количество',
  //   'Дата поставки'
  // ];

  constructor() {}

  ngOnInit(): void {
    this.initialValues();
  }

  initialValues(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        brand: `Edward King ${i}`,
        vender_code: i,
        name_of_product: `London, Park Lane no. ${i}`,
        price: i,
        availability: true,
        quantity: i,
        date_of_delivery: `2017-07-23`,
      });
    }
    this.listOfData = data;
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: TableInterface) => item.brand.indexOf(this.searchValue) !== -1);
  }
}
