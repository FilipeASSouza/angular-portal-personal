import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  @Input() nome:string = ''
  @Input() telefone:string = ''
  @Input() id?: number
  @Input() avatar: string | ArrayBuffer = '';
}
