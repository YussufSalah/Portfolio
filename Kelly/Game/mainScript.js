let score = 0;
let initialId = 0;
let countdown = 3;

let timer = {
	min:"1",
	sec:"00"
};
let collected = [];

let items = [
	{
		id:0,
		name:"Lens",
		imgUrl:"images/lens.png"
	},
	{
		id:1,
		name:"Camera",
		imgUrl:"images/camera.png"
	},
	{
		id:2,
		name:"Gimbal",
		imgUrl:"images/gimbal.png"
	},
	{
		id:3,
		name:"Memory Card",
		imgUrl:"images/sdCard.png"
	},
	{
		id:4,
		name:"Flash",
		imgUrl:"images/flash.png"
	},
	{
		id:5,
		name:"Tripod",
		imgUrl:"images/tripod.png"
	},
	{
		id:6,
		name:"Laptop",
		imgUrl:"images/laptop.png"
	},
	{
		id:7,
		name:"Shoulder Rig",
		imgUrl:"images/shoulderRig.png"
	},
	{
		id:8,
		name:"Bag",
		imgUrl:"images/bag.png"
	},
	{
		id:9,
		name:"Light",
		imgUrl:"images/light.png"
	}
]

const originalArray = items;

function startGame(){
	if(countdown > 0){
	document.getElementById('gameBody').innerHTML = `<div class="startGame"><span class="countdown">${countdown}</span</div>`
	setTimeout(startGame, 800);	
	countdown -= 1}
	else{
		document.getElementById('gameBody').innerHTML = '';
		clock();
	}
	
}

function clock(){
	let min = parseInt(timer.min);
	let sec = parseInt(timer.sec);

	if(min > 0 || sec > 0){
		if(sec > 0){
			sec -= 1;
			document.getElementById('timer').innerHTML = `${timer.min}:${timer.sec}`;
		}
		else{
			if(min > 0){
				min -= 1;
				sec = 59;
			}
			else{
				min = 0;
				sec = 0;
			}
			document.getElementById('timer').innerHTML = `${timer.min}:${timer.sec}`;
		}

		timer.min = `${min}`;
		if(sec < 10) {
			timer.sec = `0${sec}`;
		}
		else{
			timer.sec = `${sec}`;
		}
		randomize();
		setTimeout(clock, 1000);	
	}
	else{
			document.getElementById('timer').innerHTML = `0:00`;
			document.getElementById('gameBody').innerHTML = `<div class="startGame"><span class="countdown">Game Over</span></div>`
	}
}

function randomize(){

	let x = randomNumber(10,65);
	let y = randomNumber(10,65);
	let image = Math.floor((Math.random() * (items.length)))

	document.getElementById('gameBody').innerHTML = `<div class="imageLocation" style="top:${x}%; left:${y}%;"><img src="${items[image].imgUrl}" onclick="setSelected(${items[image].id})"></div>`

	// if(collected.length = 10){
	// 	return true
	// }
	// else{
	// 	return false
	// }

}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function setSelected(id){
	collected.push(items.filter(item => item.id == id)[0]);
	const index = collected.length - 1;
	score += 1;
	document.getElementById('itemCounter').innerHTML = `${score} / ${originalArray.length}`;



	document.getElementById(`inventory${index}`).innerHTML = `<img src="${collected[index].imgUrl}"><span>${collected[index].name}</span>` 

	items = items.filter(item => item.id != id);

	if(collected.length == originalArray.length){
		document.getElementById('gameBody').innerHTML = `<div class="startGame"><span class="countdown won">You Won</span><span class="subTitle">Now you can Shoot</span></div>`
	}
	

}

function initialState(){

	document.getElementById('gameBody').innerHTML = `<div class="startGame">
	<div class="gameButton">
		<span onclick="startGame()" >Play Game</span>
		</div>
	</div>`;

	document.getElementById('itemCounter').innerHTML = `${score} / ${items.length}`;
	document.getElementById('timer').innerHTML = `${timer.min}:${timer.sec}`;
	for(let i in items){
		document.getElementById('inventory').innerHTML += `<div class='collectedBox' id="inventory${items[i].id}"></div>` 
	}
}


window.onload = function(){
	initialState();
}

