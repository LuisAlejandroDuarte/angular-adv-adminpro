import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label,Color } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title:string="Sin título";
  @Input() labels:string[]=[];
  @Input() data:number[]=[];

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];


  public colors:Color[]=[
    {backgroundColor:['#9E120E','#FF5800','#FFB414']}

  ];

}
