import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
// import { Recomandation } from './recommendation.model';

@Component({
    selector: 'app-recommendation',
    templateUrl: './recommendation.page.html',
    styleUrls: ['./recommendation.page.scss'],
})
export class RecommendationPage implements OnInit {
    public recommendation: any[];
    private scopeItem = {};
    constructor(private http: HTTP, private toastCtl: ToastController) { }

    ngOnInit() {
        this.getRecommendation();
    }
    showDetail(item: { isShowDetail: boolean; }) {
        this.scopeItem = item;
        item.isShowDetail = !item.isShowDetail;
    }

    doRefresh(event) {
        setTimeout(() => {
            this.getRecommendation();
            event.target.complete();
        }, 2000);
    }

    getRecommendation() {
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        };
        const data = {
            game_id: 'LOL'
        };
        this.http.setDataSerializer('json');
        this.http.post('http://localhost:3000/recommendation', data, headers)
        .then(res => {
            res.data = JSON.parse(res.data);
            this.recommendation = res.data.Content;
        })
        .catch(error => {
            // console.log(error.status);
            // console.log(error.error); // error message as string
            // console.log(error.headers);
            this.toastCtl.create({
                message: error.error,
                duration: 5000
            }).then(toastEl => {
                toastEl.present();
            });
        });
    }
}
