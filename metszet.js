<script>

let tombEgy=[];
let tombKetto=[];
for(let i=0;i<10;i++){
	tombEgy.push(Math.round(Math.random()*100));
}
for(let i=0;i<10;i++){
	tombKetto.push(Math.round(Math.random()*100));
}
document.write("A generált halmazok elemei:");
document.write("<br>tombEgy:");
for(let i=0;i<tombEgy.length;i++)
{
	document.write(tombEgy[i]+",");
}
document.write("<br>tombKetto:");
for(let i=0;i<tombKetto.length;i++)
{
	document.write(tombKetto[i]+",");
}

let metszet=[];

for (let i=0;i<tombEgy.length;i++){
	
    for (let j=0;j<tombKetto.length;j++){
	   	if (tombEgy[i]==tombKetto[j]){
    		let szerepelE=false;
   	
    for (let k=0;k<metszet.length;k++){
    		if (tombEgy[i]==metszet[k]){
    		szerepelE=true;
		}
   	 }
    
	  if (szerepelE==false){
		metszet.push(tombEgy[i]);
	}
		}
	}
		}

document.write("<br>tombEgy és tombKetto metszete:");
for(let k=0;k<metszet.length;k++)
{
	document.write(metszet[k]+",");
}

</script>