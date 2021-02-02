import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input() stars:number;
@Output() starChanged=new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
changeRating(newStars:number){
  this.stars=newStars;
  this.starChanged.emit(newStars)
}
}
