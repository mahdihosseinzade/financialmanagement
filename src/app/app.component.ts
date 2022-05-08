import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'financial-management';
  menu : {title:string,href:string,icon:string,items:{title:string,href:string}[]}[] = [
    {
      title:"اطلاعات پایه",
      href:"/#",
      icon:"anchor",
      items:[{title:"آیتم1",href:"/#"},{title:"آیتم2",href:"/#"}],
    },
    {
      title:"مدیریت دسترسی",
      href:"/#",
      icon:"anchor",
      items:[{title:"آیتم1",href:"/#"},{title:"آیتم2",href:"/#"}],
    },
    {
      title:"اطلاعات کاربران",
      href:"/#",
      icon:"anchor",
      items:[{title:"آیتم1",href:"/#"},{title:"آیتم2",href:"/#"}],
    },
    {
      title:"اعتبارات",
      href:"/#",
      icon:"anchor",
      items:[{title:"آیتم1",href:"/#"},{title:"آیتم2",href:"/#"}],
    },
    {
      title:"گزارش ها",
      href:"/#",
      icon:"anchor",
      items:[{title:"آیتم1",href:"/#"},{title:"آیتم2",href:"/#"}],
    },
    {
      title:"تنظیمات",
      href:"/#",
      icon:"anchor",
      items:[{title:"آیتم1",href:"/#"},{title:"آیتم2",href:"/#"}],
    },
  ]
}
