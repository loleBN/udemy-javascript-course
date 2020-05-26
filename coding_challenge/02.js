/*
* Coding Challenge 02
*/

//team's average
var johnTeamAverage = (89+120+103)/3;
var mikeTeamAverage = (116+94+123)/3;

if (johnTeamAverage>mikeTeamAverage)
	console.log("Winner: John's team!"+johnTeamAverage+" points");
else if(johnTeamAverage<mikeTeamAverage)
	console.log("Winner: Mike's team!"+mikeTeamAverage+" points");
else
	console.log("It's a draw!"+mikeTeamAverage+" points");

var maryTeamAverage = (97+134+105)/3;

switch(true){
	case (johnTeamAverage>mikeTeamAverage) && (johnTeamAverage>maryTeamAverage):
		console.log("Winner: John's team!"+johnTeamAverage+" points");
		break;
	case (mikeTeamAverage>johnTeamAverage) && (mikeTeamAverage>maryTeamAverage):
		console.log("Winner: Mike's team!"+mikeTeamAverage+" points");
		break;
	case (maryTeamAverage>johnTeamAverage) && (maryTeamAverage>mikeTeamAverage):
		console.log("Winner: Mary's team!"+maryTeamAverage+" points");
		break;
	case (johnTeamAverage===mikeTeamAverage) && (johnTeamAverage>maryTeamAverage):
		console.log("It's a draw! John and Mike teams wins"+johnTeamAverage+" points");
		break;
	case (johnTeamAverage===maryTeamAverage) && (johnTeamAverage>mikeTeamAverage):
		console.log("It's a draw! John and Mary teams wins"+johnTeamAverage+" points");
		break;
	case (mikeTeamAverage===maryTeamAverage) && (mikeTeamAverage>johnTeamAverage):
		console.log("It's a draw! Mike and Mary teams wins"+mikeTeamAverage+" points");
		break;
	default:
		console.log("It's a draw! John Mike and Mary teams wins"+mikeTeamAverage+" points");
		break;
}