import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public id: number = 0;
  public autherid: number = 0;
  public queryname:string='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      this.autherid = param['autherid'];

    })

    this.route.queryParams.subscribe(param => {
      this.queryname = param['name'];
    })
  }

}
