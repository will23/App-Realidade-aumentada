#pragma strict
var clicaBoolean: boolean;
var objRA2: GameObject;


function clicaBotao()
{
	clicaBoolean =! clicaBoolean;
	
		if(clicaBoolean)
		{
			objRA2.GetComponent.<Animation>().Play();
			GetComponentInChildren.<UI.Text>().text = "Stop";
		}
		else
		{
			objRA2.GetComponent.<Animation>().Stop();
			GetComponentInChildren.<UI.Text>().text = "Play";
		}	
}