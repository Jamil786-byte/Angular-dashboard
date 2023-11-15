import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  locationVINGeneration,
  monthVinGeneration,
  yearVinGeneration,
} from './vin-generation';

@Component({
  selector: 'app-vin-generation',
  templateUrl: './vin-generation.component.html',
  styleUrls: ['./vin-generation.component.scss'],
})
export class VinGenerationComponent implements OnInit, OnDestroy {
  vinGenerationForm!: FormGroup;
  yearVinGeneration = yearVinGeneration;
  monthVinGeneration = monthVinGeneration;
  locationVinGeneration = locationVINGeneration;
  vinGenObj: any;

  vinGenerationOutput: string = '';
  serialNo: number = 100025;
  interval: any;
  obj: any = {
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
    '16': 'G',
    '17': 'H',
    '18': 'J',
    '19': 'K',
    '20': 'L',
    '21': 'M',
    '22': 'N',
    '23': 'P',
    '24': 'R',
    '25': 'S',
    '26': 'T',
    '27': 'U',
    '28': 'V',
    '29': 'W',
    '30': 'X',
    '31': 'Y',
    '32': 'Z',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createVINGeneration();
    // this.counter();
  }

  createVINGeneration() {
    this.vinGenerationForm = this.fb.group({
      year: [''],
      location: [''],
      month: [''],
      // serialNo: [''],
    });
  }

  num = 25;
  pad(num: number, size: number): string {
    let s = num + '';
    for (let i = s.length; i < size; i++) {
      s = '0' + s;
      ('00025');
    }
    return s;
  }

  // submitVINGeneration() {
  //   this.serialNo += 1;

  //   const sno =
  //     (this.serialNo > 99999
  //       ? this.obj['' + Math.floor(this.serialNo / 10000)]
  //       : '') + this.pad(this.serialNo % 10000, 5);

  //   console.log(`sno ${sno}`);

  //   const constantValue = '000000';
  //   const year = this.vinGenerationForm.controls['year'].value;
  //   const location = this.vinGenerationForm.controls['location'].value;
  //   const month = this.vinGenerationForm.controls['month'].value;
  //   // const serialNo = this.vinGenerationForm.controls['serialNo'].value;

  //   // console.log(`Serial Number ==> ${serialNo}`);

  //   this.vinGenerationOutput = `MAT${constantValue}${year}${location}${month}${sno}`;
  // }

  submitVINGeneration(){
      
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    clearInterval(this.interval);
  }
}
