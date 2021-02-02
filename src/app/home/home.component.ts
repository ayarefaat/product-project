import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalProducts:number=0;
  img="assets/images/3.jpeg";
  img1="assets/images/7.jpeg";
  img2="assets/images/8.jpeg";
  name:string="buy from here..!"
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(ev){
    console.log(ev);
    this.totalProducts++
  }
  removeTotalProduct(event){
    this.totalProducts--
  }
}
