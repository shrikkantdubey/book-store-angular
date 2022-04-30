import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  userid: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((param) => {
      console.log(param)
      this.userid = param['userid'];
    })
  }

}
