import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter();
    starWidth: number;
    ngOnChanges() : void {
        this.starWidth = this.rating * 100 / 5;
    }
    onClick() : void {
        console.log("Stars were clicked");
        this.ratingClicked.emit("The rating is " + this.rating);
    }
}