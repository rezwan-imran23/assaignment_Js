//============feetToMile Start============//

function feetToMile (feet) {
    var Mile = feet / 5280
    return Mile ;
}
var result = feetToMile (549684);
console.log(result);

//============feetToMile End============//


//============WoodCalculator Start============//
function woodCalculator(chair, table, Bed) {
    var cahirCount = chair*1;
    var tableCount = table*4;
    var BedCount = Bed*6;
    var totalFurniture = cahirCount + tableCount +BedCount;
    return totalFurniture;
}

var woodResult = woodCalculator (2,5,3)
console.log(woodResult);

//============WoodCalculator End============//

//============brickCalculator start============//
function brickCalculator(floor){

    if (floor <= 10 ) {
        var feet = floor * 15;
        var bricks = feet * 1000;
        return bricks;
    }
    if (floor <= 20) {
        var firstTenthFloor = 10 * 15;
         var AfterTenthFloor = (floor - 10) * 12;
         var feet =  firstTenthFloor + AfterTenthFloor;
         var bricks = feet * 1000;
             return bricks;
    }
    if (floor > 20) {
        var firstTenthFloor = 10 * 15;
        var AfterTenthFloor = (floor - 10) * 12;
        var AfterTweentythFloor = (floor - 20) * 10
         var feet =  firstTenthFloor + AfterTenthFloor + AfterTweentythFloor;
         var bricks = feet * 1000;
             return bricks;
    }
    
    
}
var result = brickCalculator(25);
console.log(result);

//============BrickCalculator End============//

//============tinyFriend Start============//
function tinyFriend(friendName) {
    var smallest = friendName[0];
   for( var i = 0; i > friendName.length; i++){
    var currentName = friendName[i];
    if (currentName < smallest){
       smallest = currentName;
     }
   }
   

    return smallest;

}
var result = tinyFriend (["rezwan", "imran", "abdullah", "shama", "siam", "tahira"]);
console.log(result);
//============tinyFriend End============//