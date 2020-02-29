import { Directive, HostListener, EventEmitter, Input, Output } from '@angular/core';

@Directive({
    selector: '[swipeTab]'
})
export class SwipeTabDirective {

    @Input() tabs: number;

    @Input() selectedIndex: number;

    @Output() selectedIndexChange = new EventEmitter<number>();

    @HostListener('swipeleft', ['$event'])
    onSwipeleft(event) {
        console.log('left', this.selectedIndex, this.tabs);
        if (this.selectedIndex + 1 <= this.tabs - 1) {
            this.selectedIndex += 1;
            this.selectedIndexChange.emit(this.selectedIndex);
        }
    }

    @HostListener('swiperight', ['$event'])
    onSwiperight(event) {
        console.log('right', this.selectedIndex);
        if (this.selectedIndex - 1 >= 0) {
            this.selectedIndex -= 1;
            this.selectedIndexChange.emit(this.selectedIndex);
        }
    }

}
