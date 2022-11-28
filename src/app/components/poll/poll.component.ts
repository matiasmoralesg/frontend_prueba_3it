import { MusicStyleService } from './../../services/music-style.service';
import { Component, OnInit } from '@angular/core';
import { MusicStyle } from 'src/app/model/music-style';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarMessageComponent } from '../snack-bar-message/snack-bar-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  public musicStylesList: MusicStyle[] = []

  mensaje!: string;

  form:FormGroup = new FormGroup({
    email: new FormControl(),
    musicStyle: new FormControl()
  });

  constructor(
    private musicStyleService: MusicStyleService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.musicStyleService.getMusicStyles().subscribe(styles =>{
      this.musicStylesList = styles;
    })

    this.form = this.formBuilder.group({
      musicStyle: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
      
    })
    
  }

  get controls(){
    return this.form.controls;
  }

  IngresarVoto(){

    if(this.form.valid){
      
      this.userService.createVoto(this.form.value).subscribe(
        res => {
          this.mensaje = "Usuario ingresado correctamente";
          this.openSnackBar(this.mensaje);  
          
        }
        , err => {
          console.log(err)
          this.openSnackBar(err.error.mensaje);
        }
      );
    }
  }
  
  openSnackBar(data: string) {
    this._snackBar.openFromComponent(SnackBarMessageComponent, {
      duration: 2500,
      data: data
    });
  }

}
