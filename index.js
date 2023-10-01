// Code your solution in this file!
const returnFirstTwoDrivers = function( drivers){
 return [drivers[0], drivers[1]];
}
const returnLastTwoDrivers = function( drivers){
    return [ drivers[drivers.length -2] , drivers[drivers.length - 1]];
}
const selectingDrivers= [returnFirstTwoDrivers , returnLastTwoDrivers];
function createFareMultiplier (num){
    if (num === 4)
        return  (function fareFunction (fare){
    return fare * 4});
   else{
    return function fareFunction(fare){
        return fare * fare;
    }
   }
}
const  fareDoubler = function (fare){
      createFareMultiplier()
        return fare * 2;
    
}
const fareTripler = function(fare){
    createFareMultiplier()
    return fare *3;
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
return returnFirstTwoDrivers(drivers);
}