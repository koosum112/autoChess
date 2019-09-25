import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.page.html',
  styleUrls: ['./heros.page.scss'],
})
export class HerosPage implements OnInit {
  heros = [];
  constructor(private http: HTTP, private toastCtl: ToastController) { }

  ngOnInit() {
      this.getHeros();
  }

  doRefresh(event) {
    setTimeout(() => {
        this.getHeros();
        event.target.complete();
    }, 2000);
  }
  getHeros() {
    this.heros = [
      {"ID":0,"NAME":"Aatrox","RACE":"Demon","PROFESSION":"Blademaster","SUB_PROFESSION":null,"COST":3,"LEVEL":1,"HP":750,"ATTACK":65,"ATTACK_SPEED":0.65,"ATTACK_RANGE":1,"ARMOR_DEFENSE":25,"MAGIC_DEFENSE":20,"DESCRIPTION":"厄薩斯LV1"},
      {"ID":0,"NAME":"Aatrox","RACE":"Demon","PROFESSION":"Blademaster","SUB_PROFESSION":null,"COST":3,"LEVEL":2,"HP":1350,"ATTACK":117,"ATTACK_SPEED":0.65,"ATTACK_RANGE":1,"ARMOR_DEFENSE":25,"MAGIC_DEFENSE":20,"DESCRIPTION":"厄薩斯LV2"},
      {"ID":0,"NAME":"Aatrox","RACE":"Demon","PROFESSION":"Blademaster","SUB_PROFESSION":null,"COST":3,"LEVEL":3,"HP":2700,"ATTACK":234,"ATTACK_SPEED":0.65,"ATTACK_RANGE":1,"ARMOR_DEFENSE":25,"MAGIC_DEFENSE":20,"DESCRIPTION":"厄薩斯LV3"},
      {"ID":1,"NAME":"Ahri","RACE":"Demon","PROFESSION":"Blademaster","SUB_PROFESSION":null,"COST":3,"LEVEL":0,"HP":2700,"ATTACK":234,"ATTACK_SPEED":0.65,"ATTACK_RANGE":1,"ARMOR_DEFENSE":25,"MAGIC_DEFENSE":20,"DESCRIPTION":"厄薩斯LV3"}
    ];
  }
  // getHeros() {
  //   const headers = {
  //     'Content-Type': 'application/json;charset=UTF-8'
  //   };
  //   const data = {
  //     game_id: 'LOL'
  //   };
  //   this.http.setDataSerializer('json');
  //   this.http.post('http://localhost:3000/heros', data, headers)
  //   .then(res => {
  //     // console.log(data.status);
  //     // console.log(data.data); // data received by server
  //     // console.log(data.headers);
  //     res.data = JSON.parse(res.data);
  //     this.heros = res.data.Content;
  //   })
  //   .catch(error => {
  //       console.log(error.status);
  //       console.log(error.error); // error message as string
  //       console.log(error.headers);
  //       this.toastCtl.create({
  //           message: error.error,
  //           duration: 5000
  //       }).then(toastEl => {
  //           toastEl.present();
  //       });
  //       // this.recommendation = error.error;
  //       // return this.recommendation;
  //   });
  // }
}
