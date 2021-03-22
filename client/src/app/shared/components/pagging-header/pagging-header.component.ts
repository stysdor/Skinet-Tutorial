import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagging-header',
  templateUrl: './pagging-header.component.html',
  styleUrls: ['./pagging-header.component.css']
})
export class PaggingHeaderComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
