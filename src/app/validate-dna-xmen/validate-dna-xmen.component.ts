import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DnaXmenService } from '../dna-xmen.service';

@Component({
  selector: 'app-validate-dna-xmen',
  templateUrl: './validate-dna-xmen.component.html',
  styleUrls: ['./validate-dna-xmen.component.css'],
})
export class ValidateDnaXmenComponent implements OnInit {
  dna: Array<Array<string>>;
  dimension: number;
  dnsInputs: any = {};
  listGroup: any;
  isNotValid: boolean;
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private dnaXmenService: DnaXmenService) {
    this.dimension = 6;
    this.dna = [];
    this.isNotValid = false;
  }

  ngOnInit(): void {
    for (let x = 0; x < this.dimension; x++) {
      const dnaFirts: Array<string> = [];
      for (let y = 0; y < this.dimension; y++) {
        dnaFirts.push('');
        const indexString: string = x + '' + y;
        /*this.dnsInputs[indexString] = {value: ''};*/
        this.dnsInputs[x] = [];
        this.dnsInputs[x][y] = null;
        this.listGroup = {
          ...this.listGroup,
          [indexString]: [null, Validators.compose([Validators.required])],
        };
      }
      this.dna.push(dnaFirts);
    }
    this.form = this.createContact();
  }

  createContact(): FormGroup {
    return this.formBuilder.group(this.listGroup);
  }

  submit() {

    this.isNotValid = false;
    if (!this.form.valid) {
      this.isNotValid = true;
      return;
    }
    const requestBody = {
      dna: []
    };

    for (const key of Object.keys(this.dnsInputs)) {
      const listH: string[] = this.dnsInputs[key];
      requestBody.dna.push(listH.join(''));
    }
    this.dnaXmenService.postIsMutant(requestBody).subscribe(
      data => {
        console.log(data);
        alert('El siguiente ADN es un Mutante');
      },
      error => {
        alert('El siguiente ADN es Humano');
      });
    console.log(requestBody);

  }

  isNotValidForm(){
    return this.isNotValid;
  }

}
