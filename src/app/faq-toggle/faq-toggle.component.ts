import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-toggle',
  templateUrl: './faq-toggle.component.html',
  styleUrls: ['./faq-toggle.component.scss']
})
export class FaqToggleComponent {
  heading:any = 'Faq-toggle Component using @Input';
  faqTitle1:string = 'FAQ Title1';
  faqTitle2:string = 'FAQ Title2';
    @Input() title:any;
    isExpanded: boolean = false;

    toggle() {
      this.isExpanded = !this.isExpanded;
    }
}
