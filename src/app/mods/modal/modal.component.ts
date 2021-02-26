import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private elem: ElementRef) { }

  @Output() close = new EventEmitter();

  ngOnInit(): void {
    document.body.appendChild(this.elem.nativeElement);
  }

  ngOnDestroy(): void {
    this.elem.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

}
