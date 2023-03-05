import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";

/**
 * @title Basic buttons
 */
@Component({
  selector: 'simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css'],
  imports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    RouterOutlet
  ],
  standalone: true
})
export class Simple {}
