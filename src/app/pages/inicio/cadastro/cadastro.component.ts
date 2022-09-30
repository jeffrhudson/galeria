import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagemService } from 'src/app/core/services/imagem.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  submitted: Boolean = false;

  imagemForm = this.fb.group({
    id: [null],
    nome: ['', [Validators.required]],
    base64: ['', Validators.required],
    tipoImagem: ['', Validators.required],
    dataCadastro: [new Date().toISOString(), Validators.required],
    usuarioCadastro: ['jose', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private imagemService: ImagemService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  fileUpload(event: any) {
    let file = event.target.files[0];
    this.toBase64(file).then((base64String) =>
      this.imagemForm.get('base64')?.setValue(base64String)
    );
  }

  toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result!.toString());
      reader.onerror = (error) => reject(error);
    });

  salvar() {
    if (this.imagemForm.invalid) {
      this.submitted = true;
      return;
    }

    this.imagemService.cadastrarImagem(this.imagemForm.value).subscribe({next: value =>
      this.router.navigate(["/inicio"]), error: err => console.log(err)});
  }

  isControlValid(controlName: String){
    return
  }
}
