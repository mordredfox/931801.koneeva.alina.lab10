function curtain(){
	document.getElementById("curtain").style.animationName='curtainUp';
	document.getElementById("curtain").style.backgroundPosition='center 1000%';
	setTimeout("document.getElementById('curtain').style.display='none'",500);
 }
 function lightTurn(){
 var elem=document.getElementById("light");
 var wizard=document.getElementById("wizard");
 var hat=document.getElementById("hat");
 var bunny=document.getElementById("bunny");
 var bird=document.getElementById('bird');
 bird.style.animationDuration='0.1s';
 bunny.style.animationDuration='0.1s';
 if(elem.style.opacity == "0.5")
 {
	 hide(elem);
	 hide(hat);
	 hide(bunny);
	 hide(wizard);
	 hide(bird);
 } else{
		 show(elem,0.5);
		 show(hat,1);
		 show(bunny,1);
		 show(wizard,1);
		 show(bird,1);
		 }
 }
 function hide(el){
	 el.style.animationName='lightOff';
	 el.style.opacity="0";
 }
 function show(el,op){
	 el.style.animationName='lightOn';
	 el.style.opacity=op;
 }
 function FocusPokus(){
	 var bunny=document.getElementById("bunny");
	 var bird=document.getElementById('bird');
	 bunny.style.animationDuration='0.5s';
	 bird.style.animationDuration='0.5s';
	 if (bird.style.bottom == '290px'){
		 down(bird);
		 up(bunny);
	 } else{
		 down(bunny);
		 up(bird);
	 }
 }
 function up(s){
	 s.style.animationName='pocus';
	 s.style.bottom='290px';
 }
 function down(s){
	 s.style.animationName='focus';
	 s.style.bottom='190px';
 }