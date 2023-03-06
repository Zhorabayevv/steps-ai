import { Component, OnInit } from '@angular/core';

import { TableInterface } from 'src/app/table/types/tableItem.interface';
import { HeadTableInterface } from 'src/app/table/types/headTable.interface';

@Component({
  selector: 'mc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  searchValue = '';
  searchAvailability: boolean | null = false;
  listOfData: TableInterface[] = [];
  listOfDisplayData: TableInterface[] = [];
  headTable = [
    {
      name: 'Бренд',
      key: 'brand',
      isSort: false,
    },
    {
      name: 'Артикул',
      key: 'vender_code',
      isSort: false,
    },
    {
      name: 'Название товара',
      key: 'name_of_product',
      isSort: false,
    },
    {
      name: 'Цена',
      key: 'price',
      isSort: false,
    },
    {
      name: 'Наличие',
      key: 'availability',
      isSort: false,
    },
    {
      name: 'Количество',
      key: 'quantity',
      isSort: false,
    },
    {
      name: 'Дата поставки',
      key: 'date_of_delivery',
      isSort: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initialValues();
  }

  initialValues(): void {
    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        brand: `Edward King ${i}`,
        vender_code: i,
        name_of_product: `London, Park Lane no. ${i}`,
        price: i,
        availability: i % 2 ? true : false,
        quantity: i,
        date_of_delivery: `2017-07-23`,
      });
    }
    this.listOfData = data;
    this.listOfDisplayData = [...this.listOfData];
  }

  reset(data: HeadTableInterface): void {
    if (data.key === 'availability') {
      this.searchAvailability = null;
    } else {
      this.searchValue = '';
    }
    this.listOfDisplayData = [...this.listOfData];
    this.search(data);
  }

  search(data: HeadTableInterface): void {
    data.isSort = false;
    switch (data.key) {
      case 'brand':
        this.listOfDisplayData = this.listOfDisplayData.filter(
          (item: TableInterface) => item.brand.indexOf(this.searchValue) !== -1
        );
        break;
      case 'vender_code':
        this.listOfDisplayData = this.listOfDisplayData.filter(
          (item: TableInterface) =>
            item.vender_code.toString().indexOf(this.searchValue) !== -1
        );
        break;
      case 'name_of_product':
        this.listOfDisplayData = this.listOfDisplayData.filter(
          (item: TableInterface) =>
            item.name_of_product.indexOf(this.searchValue) !== -1
        );
        break;
      case 'price':
        this.listOfDisplayData = this.listOfDisplayData.filter(
          (item: TableInterface) =>
            item.price.toString().indexOf(this.searchValue) !== -1
        );
        break;
      case 'availability':
        this.listOfDisplayData = this.listOfDisplayData.filter(
          (item: TableInterface) =>
            item.availability ===
            (this.searchAvailability
              ? this.searchAvailability
              : item.availability)
        );
        break;
      case 'quantity':
        this.listOfDisplayData = this.listOfDisplayData.filter(
          (item: TableInterface) =>
            item.quantity.toString().indexOf(this.searchValue) !== -1
        );
        break;
    }
  }
}
