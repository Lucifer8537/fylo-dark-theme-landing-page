import { Component } from '@angular/core';
interface featureType {
  imgSrc: string;
  title: string;
  context: string;
}
interface commentType {
  context: string;
  profileSrc: string;
  name: string;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  featureList: featureType[] = [
    {
      imgSrc: '../assets/icon-access-anywhere.svg',
      title: 'Access your files, anywhere',
      context:
        'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    },
    {
      imgSrc: '../assets/icon-security.svg',
      title: 'Security you can trust',
      context:
        '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    },
    {
      imgSrc: '../assets/icon-collaboration.svg',
      title: 'Real-time collaboration',
      context:
        'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    },
    {
      imgSrc: '../assets/icon-any-file.svg',
      title: 'Store any type of file',
      context:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];
  commentList: commentType[] = [
    {
      context:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      profileSrc: '../assets/profile-1.jpg',
      name: 'Satish Patel',
      title: 'Founder & CEO, Huddle',
    },
    {
      context:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      profileSrc: '../assets/profile-2.jpg',
      name: 'Bruce McKenzle',
      title: 'Founder & CEO, Huddle',
    },
    {
      context:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      profileSrc: '../assets/profile-3.jpg',
      name: 'Iva Boyd',
      title: 'Founder & CEO, Huddle',
    },
  ];
}
