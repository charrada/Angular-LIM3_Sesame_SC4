import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
users:any[]=[]

constructor(private httpClient :HttpClient){}

private apiURL='http://localhost:8080/user/'


ngOnInit(): void {
this.httpClient.get<any>(this.apiURL+"getAllUsers").subscribe(
  listUser=>{
this.users=listUser
  }
)


}



}
