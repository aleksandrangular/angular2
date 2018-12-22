import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  oil: string;
  country: number;
  elenergy: number;
  growth: number;
  dataSource = [
    {country: 'США', oil: 8.9, elenergy: 12331, growth: 121},
    {country: 'Німеччина', oil: 4.1, elenergy: 5963, growth: 141},
    {country: 'Польша', oil: 2.4, elenergy: 2511, growth: 133},
    {country: 'Японія', oil: 4.8, elenergy: 7628, growth: 131},
    {country: 'Китай', oil: 0.9, elenergy: 827, growth: 253},
    {country: 'Росія', oil: 5.9, elenergy: 6700, growth: 151},
    {country: 'Казахстан', oil: '-', elenergy: '-', growth: '-'},
  ];
  displayedColumns: string[] = ['country', 'oil', 'elenergy', 'growth'];
  constructor() { }

  ngOnInit() {}



}
