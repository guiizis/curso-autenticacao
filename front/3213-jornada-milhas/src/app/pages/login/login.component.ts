import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, first, of } from 'rxjs';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private readonly autenticacaoService = inject(AutenticacaoService);
  private readonly router = inject(Router);
  private formBuilder = new FormBuilder();
  public loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      senha: [null]
    });
  }


  login() {
    const { email, senha } = this.loginForm.value;

    this.autenticacaoService
      .autenticar(email, senha)
      .pipe(
        first(),
        catchError((error) => {
          console.error('login error', error)
          return of(null);
        })
      )
      .subscribe((response) => {
        this.router.navigate(['/']);
        console.log('login response', response);
      });
  }
}
