import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilisateurEntity } from './utilisateur-entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oxalisAppAngualar';
  SERVER_URL = "http://localhost:8089/appliEvenement/inscription";
  //uploadForm: FormGroup; 
  utilisateurForm:UtilisateurEntity = new UtilisateurEntity(); 

  
  //constructor (private http:HttpClient){}

  //Methode onSubmit qui prend notre formulaire avec la propriété value qui donne l'objet de notre formulaire
 
  constructor(private httpClient: HttpClient) { }
 
  ngOnInit(): void {

    
  }
  //Methode subscribe : on s'abonne à l'asynchronisation (c'est un observable) => pour ne pas s'arreter dans le programme

  //Autre methode inscription
  public inscription(nom:string, prenom:string, email:string, pseudo:string,
    password:string){
    const httpOptions = {
      headers: new HttpHeaders(
        {
          "Content-Type" : "application/json"
        }
      ),

    };
    return  this.httpClient.post(this.SERVER_URL,{
      nom: nom,
      prenom: prenom,
      email: email,
      pseudo: pseudo,
      password: password
    })
  }
  // Methode d'envoi
  onSubmit() {

    console.log(this.utilisateurForm);
    //envoi requete
    this.inscription(this.utilisateurForm.nom,this.utilisateurForm.prenom,this.utilisateurForm.email,this.utilisateurForm.pseudo,this.utilisateurForm.password)
    .subscribe(
      data => console.log(data), // traitement donné reçu : 1er param = toujours succees
      error => console.log(error), // erreur : 2em par= = toujours echec
      () => console.log("le process est termine") // s'execute quand le subscribe a tout récupérer que ça soit succées ou echec
    );
    
   }
}
