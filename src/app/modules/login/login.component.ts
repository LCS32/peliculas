import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginNameSpace } from 'src/app/model/login.model';
import { StorageNameSpace } from 'src/app/model/storage.model';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent<LoginNameSpace.Login> implements OnInit {
  override set setResponseService( { request_token }: LoginNameSpace.Login)  {
    this.storageService.setJasonValue(StorageNameSpace.Storage.RequestToken, request_token);
    this.storageService.setJasonValue(StorageNameSpace.Storage.FlagLogin, "true");
    this.router.navigate(['populares'])
 }
  formLogin:FormGroup = new FormGroup({});
  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    protected override readonly apiService: ApiService<LoginNameSpace.Login>,
    private readonly storageService: StorageService,
  ) {
    super(apiService);
   }

  override ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if(this.isFormInvalid(this.formLogin)) return;
    const { username , password } = this.formLogin.value
    const body = {
      username,
      password,
      request_token: this.storageService.getJasonValue(StorageNameSpace.Storage.RequestToken)
    }
    this.paramsConfig.url = ConstantUri.validateWithLogin;
    this.paramsConfig.params = {api_key: ConstantUri.apiKey}
    this.paramsConfig.body = body;
    this.postRequest();


    
  }

}
