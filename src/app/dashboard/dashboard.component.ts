import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/']);
  }

  books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMzFauFHVQTkklojHoIspzFxRzx_G-p5VgKg-XhmCiwUz2wnq1',isIssued: false },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f',isIssued: false},
    { title: 'Nineteen Eighty-Four', author: 'George Orwell', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQcUQojGVBpaQhz5VhrSltinVAbdFEEvOtpx27qLWVfNFMgWgMI',isIssued: false },
    { title: 'Pride and Prejudice', author: 'Jane Austen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uG-djByLShtWzvFjObVikD15TOCSROQ-oFI6Yb9Asq5X5_hh',isIssued: false },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dO5LTu_Afb-CwjECUj8_-MxtUw2w60M24_xSTgWISQ4Akapl',isIssued: false},
    { title: 'Little Women', author: 'Louisa May Alcott', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdce-SLWu9Y3kj1Yxh9KFuKylNvXyAjsc3LNRJD_f_TGUyL6IG',isIssued: false},
    { title: 'Wuthering Heights', author: 'Emily Brontë', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDXcTIGUBMQmsGJ0BtjFk0lDtCypDFEyEIJZxaO9-LXGosXBtX',isIssued: false },
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlt9G-RrRqT-xmDmcW28hmK8T2TqhzUs8NsRNnymp63AnEAuJz',isIssued: false },
    { title: 'Great Expectations', author: 'Charles Dickens', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631687432i/2623._UX187_.jpg',isIssued: false },
    { title: 'Moby-Dick', author: 'Herman Melville', image: 'https://vader-prod.s3.amazonaws.com/1541104023-41VnFKC9srL.jpg',isIssued: false },
    { title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0qDYn23fVLXLa9iOL4E4AvZVGi4SxmgpkJCrRYUCsBhH69JS',isIssued: false },
    { title: "Alice's Adventures in Wonderland", author: 'Lewis Carroll', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHM76QmjBv12hFKnHmmY5X-DLwozdo1CNOZjP69wlnQItHr1oi',isIssued: false },
    { title: 'Lord of the Flies', author: 'William Golding', image: 'https://orion-uploads.openroadmedia.com/sm_e7262fbd4858-lord-of-the-flies.jpg?w=640',isIssued: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', image: 'https://i.ebayimg.com/images/g/DwkAAOSwCEllCZJm/s-l400.jpg',isIssued: false},
    { title: 'Anna Karenina', author: 'Leo Tolstoy', image: 'https://i.pinimg.com/736x/f2/e7/46/f2e746a55f426bccc14ed1516e362186.jpg',isIssued: false }
  ];

  issueBook(book: any) {
  book.isIssued = true;
}

returnBook(book: any) {
  book.isIssued = false;
}

searchText: string = '';

get filteredBooks() {
  const text = this.searchText.toLowerCase().trim();
  return this.books.filter(book =>
    book.title.toLowerCase().includes(text) ||
    book.author.toLowerCase().includes(text)
  );
}


}
