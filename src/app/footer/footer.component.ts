import { Component } from '@angular/core';
interface infoType {
  icon: string;
  value: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  inputValue!: string;
  showError = 0;
  infoList1: infoType[] = [
    {
      icon: '../../assets/icon-location.svg',
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];
  infoList2: infoType[] = [
    {
      icon: '../../assets/icon-phone.svg',
      value: '+1-543-123-4567',
    },
    {
      icon: '../../assets/icon-email.svg',
      value: 'example@fylo.com',
    },
  ];
  option1: string[] = ['About Us', 'Jobs', 'Press', 'Blog'];
  option2: string[] = ['Contact Us', 'Terms', 'Privacy'];
  freeBtnClick = () => {
    if (!this.isEmail(this.inputValue)) {
      this.showError = 1;
    } else {
      this.showError = 0;
    }
  };
  isEmail = (email: string): boolean => {
    // Regular expression for a simple email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };
}
