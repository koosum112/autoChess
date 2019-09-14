import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-recommendation',
	templateUrl: './recommendation.page.html',
	styleUrls: ['./recommendation.page.scss'],
})
export class RecommendationPage implements OnInit {
	private recomandation = [];
	private scopeItem = {};
	constructor() { }

	ngOnInit() {
		this.recomandation = [
			{
				tier: 0,
				early_stage: {
					effect: [{ title: 'Gunslinger', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				},
				medium_stage: {
					effect: [{ title: 'Gunslinger', count: 4 }, { title: 'Pirate', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Gangplank',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				},
				later_stage: {
					effect: [{ title: 'Gunslinger', count: 4 }, { title: 'Pirate', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Chogath',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Sejuani',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				}
			},
			{
				tier: 0,
				early_stage: {
					effect: [{ title: 'Gunslinger', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				},
				medium_stage: {
					effect: [{ title: 'Gunslinger', count: 4 }, { title: 'Pirate', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Gangplank',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				},
				later_stage: {
					effect: [{ title: 'Gunslinger', count: 4 }, { title: 'Pirate', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Chogath',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Sejuani',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				}
			},
			{
				tier: 0,
				early_stage: {
					effect: [{ title: 'Gunslinger', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				},
				medium_stage: {
					effect: [{ title: 'Gunslinger', count: 4 }, { title: 'Pirate', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Gangplank',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				},
				later_stage: {
					effect: [{ title: 'Gunslinger', count: 4 }, { title: 'Pirate', count: 3 }],
					heros: [
						{
							name: 'Tristana',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Lucian',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Graves',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Chogath',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						},
						{
							name: 'Sejuani',
							skill: 'N/A',
							profession: 'Gunslinger',
							race: 'Noble',
							level: 1,
							cost: 2,
							attack: '65/117/234',
							attack_speed: 0.65,
							attack_range: 3,
							hp: '600/1080/2160',
							armor: 25,
							magic_defense: 20,
							equipment: []
						}
					]
				}
			}
		];
	}

	showDetail(item: { isShowDetail: boolean; }) {
		this.scopeItem = item;
		item.isShowDetail = !item.isShowDetail;
	}
}
