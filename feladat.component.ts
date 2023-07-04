import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {
  szam: number = 1;
  megoldas: string[] = [];
  EredmenyMentes(): void {
    let oszto: number = 0;
    for (let i: number = 1; i <= this.szam; i++) {
      if (this.szam % i == 0) {
        oszto++;
      }
    }
    if (oszto == 2) {
      this.megoldas.push(`Az ${this.szam} prím`);
    }
    else {
      this.megoldas.push(`Az ${this.szam} NEM prím`)
    }
  }

  visszajelzoSzoveg: string = "";

  primE(): void {
    let oszto = 0;
    for (let i: number = 0; i <= this.szam; i++) {
      if (this.szam % i == 0) {
        oszto++;
      }
    }
    if (oszto == 2) {
      this.visszajelzoSzoveg = "prím";
    }
    else {
      this.visszajelzoSzoveg = "NEM prím";
    }
  }
}

