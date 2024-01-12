import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { AboutUsService } from 'src/app/service/about-us/about-us.service';

@Component({
  selector: 'app-about-us-uav',
  templateUrl: './about-us-uav.component.html',
  styleUrls: ['./about-us-uav.component.css']
})
export class AboutUsUavComponent {
  about : AboutUs= new AboutUs();
  content:any;
  constructor(private aboutService:AboutUsService,
              private sanitizer: DomSanitizer,
    ){}
    ngOnInit(): void {
      this.getInformation()
    }

    getInformation(){
      this.aboutService.getAllInformation().subscribe(res=>{
        this.about = res ;
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.about.contentUav);
      })
    }
}
