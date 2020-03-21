import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twitter';
  data;
  message;
  names = [
    { id: '1', name: 'Conor Mcgregor', active: true },
    { id: '2', name: 'Elon Musk', active: false },
    { id: '3', name: 'Burger King', active: false },
    { id: '4', name: 'Wendy\'s', active: false },
    { id: '5', name: 'Chipotle', active: false },
  ];

  constructor(private http: HttpService) {

  }
  ngOnInit() {
    this.http.getTweet('1').subscribe(
      (x: any) => {
        this.data = x;

      },
      (err: any) => {

        this.message = err.message;
      }

    );

  }

  onClick(e: Event, id: string) {
    e.stopPropagation();
    this.http.getTweet(id).subscribe(
      (x: any) => {
        this.data = x;
      },
      (err: any) => {
        this.message = err.message;
      }
    );
    this.setActive(id);
  }

  setActive(id: string) {
    this.names.forEach(name => {
      if (name.id === id) { name.active = true; } else {
        name.active = false;
      }
    });
  }

}


