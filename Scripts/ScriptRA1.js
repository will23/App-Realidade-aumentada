#pragma strict

var abrefecha: boolean;
var obj1: GameObject;
var obj2: GameObject;

function Start () 
{

}

function Update () 
{

}

function OnMouseDown()
{
	abrefecha =! abrefecha;
	
	if(abrefecha)
	{
		iTween.MoveTo(obj1, {"x":-1, "isLocal":true, "time":1});
		iTween.MoveTo(obj2, {"x":1, "isLocal":true, "time":1});	}
	else
	{
		iTween.MoveTo(obj1, {"x":0, "isLocal":true, "time":1});
		iTween.MoveTo(obj2, {"x":0, "isLocal":true, "time":1});
	
	}

}