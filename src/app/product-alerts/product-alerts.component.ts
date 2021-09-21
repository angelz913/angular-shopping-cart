import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', // the selector identifies the component, "app-" + name
  templateUrl: './product-alerts.component.html', // the component's HTML
  styleUrls: ['./product-alerts.component.css'], // the component's CSS
})
export class ProductAlertsComponent implements OnInit {
  // the property value passes in from the component's parent, ProductListComponent
  @Input() product!: Product;
  // emit an event when the value of the notify property changes
  @Output() notify = new EventEmitter();
  constructor() {}
  ngOnInit() {}
}
