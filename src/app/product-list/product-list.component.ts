import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  public registrations: any;

  // to feed from db
  private records = [
    {name: 'Squall', surname: 'Leonhart', age: '17'},

    {name: 'Rinoa', surname: 'Heartilly', age: '17'},

    {name: 'Laguna', surname: 'Loire', age: '44'},

    {name: 'Zell', surname: 'Dincht', age: '17'},

    {name: 'Irvine', surname: 'Kinneas', age: '17'},

    {name: 'Quistis', surname: 'Trepe', age: '18'},

    {name: 'Selphie', surname: 'Tilmitt', age: '17'},
  ];



  getRegistrations() {
    this.registrations = this.records;
  }

}



