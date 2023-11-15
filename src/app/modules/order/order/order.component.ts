import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  value: any = '';
  parentData: any = '';
  name!: string;
  price!: number;


  salesProducts = [
    { id: 1, name: 'laptop', price: 40000 },
    { id: 2, name: 'washing machine', price: 17500 },
    { id: 3, name: 'acs', price: 30000 },
    { id: 4, name: 'phone', price: 29000 },
  ];

  topProducts = [
    { id: 5, name: 'charger', price: 1700 },
    { id: 6, name: 'mobile', price: 25000 },
    { id: 7, name: 'fridge', price: 18000 },
    { id: 8, name: 'keyboard', price: 350 },
  ];
  fromDateTime: any;
  toDateTime: any;
  fileName = 'vin_generated_data.xlsx';

  vinGenerationList = [
    {
      BIWNumber: '3',
      ChassisType: '635003',
      VCNumber: '51230525R',
      Model: 'Nexon EV',
      Color: 'White',
      Market: 'Export',
      Destination: 'Nepal',
      Drive: 'RHD',
      Generated_VIN_Number: 'MAT635003PAR00153',
      Timestamp: '2023-06-27T15:25:21',
    }

  ];

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {}

  filter() {
    if (this.fromDateTime == undefined) {
      alert('From Date & Time is required');
    } else if (this.toDateTime == undefined) {
      alert(`To Date & Time is required`);
    } else {
      const search = {
        fromDate: this.fromDateTime,
        toDate: this.toDateTime,
      };
      console.log(search);
      // this.dataService
      //   .vinPostRequest('https://localhost:7060/api/vins', search)
      //   .subscribe(
      //     (res) => {
      //       console.log(res);
      //     },
      //     (error) => {
      //       alert(error.message);
      //     }
      //   );
    }
  }

  generateVin(){
    this.router.navigate(['vin-generation/vin-generation']);
  }
  exportExcel() {
    // fatching table id
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    // Genering sheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // save file
    XLSX.writeFile(wb, this.fileName);
  }

  onInputChanged(event: any) {
    this.parentData = event.target.value;
  }

  updateProduct() {
    
  }
}
