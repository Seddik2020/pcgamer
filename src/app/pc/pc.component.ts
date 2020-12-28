import { Component, OnInit } from '@angular/core';
import { PC } from '../classes/pc';


@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent  {
  selectedPc: PC;
  lien='';
  pcs: PC[];
  headers: string [];
  nombre: number=0;
  total: number=0;
   constructor() {
     this.selectedPc=  new PC(
      "Ref1000","ACER", "Nitro N50-610 - Core™ i7-10700", "8 Go / 64 Go (maximum)", "NVIDIA GeForce GTX 1660 SUPER",
      "SSD :256 Go  HD:  1 To", "../assets/images/nitro-n50-610-core-i7-10700.jpg", 3000);
  this.headers=["ref", "marque", "processeur", "ram", "carte_graphique",  "disque_dur",  "imageUrl", "prix"];
   this.pcs = [
     new PC(
      "Ref1000","ACER", "Nitro N50-610 - Core™ i7-10700", "8 Go / 64 Go (maximum)", "NVIDIA GeForce GTX 1660 SUPER",
      "SSD :256 Go  HD:  1 To", "../assets/images/nitro-n50-610-core-i7-10700.jpg", 3000),
   new PC("Ref2000","GUNGNIR","I7-10700KF - 3070", "16 Go", "NVIDIA GeForce GTX 1660 SUPER",
   "SSD 512Go   HD:  1 To", "../assets/images/gungnir-i7-10700kf-3070-16go-512go-tunisie.jpg", 4980),
   new PC("Ref3000","MSI", "Intel Core i7-10700KF", "2 x HP 8GB DDR4 3000 Mhz", "Palit GeForce RTX™ 3070 GamingPro",
"SSD HP EX900 Pro M.2 512GB", "../assets/images/msi-gaming-aegis-ti3-8rd-i7-8e-gen-8-go.jpg", 6399)
   ];
   }


  ngOnInit(): void {  }

  onSelect(pc: PC): void {
    this.selectedPc = pc;
    }
  /*  
  total(nombre:number){
    this.total=nombre*selectedPc.prix;
  }  */
}
