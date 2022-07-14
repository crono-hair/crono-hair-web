import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalOpen } from 'src/app/helpers/modal-open';
import { NavigationBar } from 'src/app/helpers/navigation-bar';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit, AfterViewInit {
  
  menuLateralOpen = false;
  modalOpen = false;
  constructor(
    private navigationBar: NavigationBar,
    private modal: ModalOpen
  ) {
    this.navigationBar.open.subscribe(res => this.menuLateralOpen = res);
    this.modal.getOpen().subscribe(res => this.modalOpen = res);
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.navigationBar.clickOut();
  }
}
