import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

import { HttpService } from '../../../../services/http';

@Component({
  styleUrls: ['./resume-list.view.scss'],
  templateUrl: './resume-list.view.html'
})

export class ResumeListView {
  resumeList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http,
    private httpService: HttpService
  ) {}

   ngOnInit() {
     this.activatedRoute.data.subscribe(data => {
       this.resumeList = data['resumeList'];
       console.log('this.resumeList', this.resumeList);
     });

    // this.httpService.get('/resume-list').OK('OK')((data: any) => console.log('!!!data', data));
   }

  resumeDetailLoad(event: any): void {
    console.log('event', event.data.id);
    // this.router.navigate([`../resume-detail`, { resumeId: 1 }], { relativeTo: this.activatedRoute });
    // this.router.navigate(['cv/resume-detail', { id: 1 }]);
    this.router.navigate([`cv/resume-detail/${event.data.id}`]);
    // this.router.navigateByUrl(`cv/resume-detail/${id}`);
  }
}
