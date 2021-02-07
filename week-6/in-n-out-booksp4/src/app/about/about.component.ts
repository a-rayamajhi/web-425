/**
 * Title: about.component.ts
 * Author: Professor Krasso
 * Date: 31 Jan 2021
 * Modified By:  Anil Rayamajhi
 * Description: About Component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // About component payload
  artist: string;
  description: string;
  profilePicture: string;

  constructor() {
    this.artist = 'Yakov Fain';
    this.description = `Yakov Fain is a Principal Developer Advocate for SuranceBay where he focuses on the latest Web technologies used in the Insurance Industry. His main responsibilities are connecting with developers and speaking publicly about cutting-edge technologies on conference panels, at user groups, on blogs and with the press. Yakov Fain is Managing Director at a software boutique Farata Systems. He authored several technical books and lots of articles on software development. His book "Java Programming. 24-Hour Trainer" was published by Wrox in 2011. Yakov is Java Champion. Yakov leads Princeton Java Users Group and New York City Dart User Group. This year he's co-authored the O'Reilly book, "Enterprise Web Development".`;
    this.profilePicture =
      'https://pbs.twimg.com/profile_images/768526688728801281/dvEfGYwn_400x400.jpg';
  }

  ngOnInit(): void {}
}
