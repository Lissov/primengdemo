import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User;
  clonedExp: { [s: string]: any; } = {};
  constructor() { 
    this.user=new User();
  }

  ngOnInit(): void {
  }
  onRowEditInit(exp: any) {
    this.clonedExp[exp.Id] = {...exp};
}


  onRowEditSave(exp: any) {
    if (exp.year > 0) {
        delete this.clonedExp[exp.Id];
       //this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
    }
    else {
        //this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
}

onRowEditCancel(exp: any, index: number) {
    this.user.Experience[index] = this.clonedExp[exp.Id];
    delete this.clonedExp[exp.Id];
}

}
