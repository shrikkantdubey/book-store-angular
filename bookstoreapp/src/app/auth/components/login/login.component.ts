import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.name = param['name'];
      console.log(param);
    })
  }

  goTosignup(): void {
    this.router.navigate(['/auth/signup'])
  }

  goTobookdetails(id:number, autherid:number): void {
    this.router.navigate(['/public/book-details',id,'auther',autherid],{
      queryParams:{myname:'shrikant',myemail:'shri.com'}
    })
  }

}
