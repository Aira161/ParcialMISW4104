import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';


@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {
  
  plantas: Array<Planta> = [];
  interior:number = 0;
  exterior:number = 0;

  constructor(private service: PlantaService) { }

  getPlants(): void{
    this.service.getPlants().subscribe((plantas)=>{
      this.plantas = plantas;
      console.log(this.plantas.length)
      this.interior = (this.plantas.filter(planta => planta.tipo === "Interior")).length;
      this.exterior=this.plantas.length-this.interior;
      console.log(this.interior)
      console.log(this.exterior)
    })

  }
  
  ngOnInit() {
    this.getPlants();
  }

}
