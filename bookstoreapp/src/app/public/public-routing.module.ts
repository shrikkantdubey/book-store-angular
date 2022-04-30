import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: 'public', component: PublicComponent, children: [
      { path: '',redirectTo:'all-books', pathMatch:'full' },
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id/auther/:autherid', component: BookDetailsComponent },
    ]
  },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
