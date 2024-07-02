import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  @Input() nome:string = '';
  @Input() telefone:string = '';
}
