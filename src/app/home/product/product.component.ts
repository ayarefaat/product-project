import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Output() noProduct=new EventEmitter<number>();
@Output() removeProduct=new EventEmitter<number>();
nProducts:number=0;
@Input() img:string;
myRating:number=3
x:number=this.myRating;
  constructor() { }

  ngOnInit(): void {
  }
buy(){
  this.nProducts++;
  this.noProduct.emit(this.nProducts)
}
remove(){
  if(this.nProducts!=0){
    this.nProducts--;
    this.removeProduct.emit(this.nProducts)
  }
}
onRatingChanged(ev:number){
  console.log(ev);
  alert('new rating : ' + ev);
  this.x=ev

  //Call API to pass the new rating
}
}
