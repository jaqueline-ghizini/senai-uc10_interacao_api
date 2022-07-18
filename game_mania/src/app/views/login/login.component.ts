import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { 
  }

  loginModel = new User();
  mensagem = ""

  onSubmit(){
    console.log(this.loginModel)

    this.loginService.login(this.loginModel).subscribe((response) =>{
      console.log(response),
      this.mensagem = "Sucesso!"
      this.router.navigateByUrl('')
    }, 
      (respostaErro) =>{
        this.mensagem = "Erro ao efetuar login! "+respostaErro.error
        console.log(this.mensagem)
      }
    )
  }

}
