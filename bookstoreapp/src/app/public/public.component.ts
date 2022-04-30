import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  bookid:number=0;
  autherid:number=0;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((param) => {
      this.bookid=param['id'];
      this.autherid=param['autherid'];
      console.log(param)
      // this.userid = param['userid'];
    })
  }

}
