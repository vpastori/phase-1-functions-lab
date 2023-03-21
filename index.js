// Code your solution in this file!

const hqBlock = 42
const blockLength = 264;


function distanceFromHqInBlocks(pickUpBlock) {
    return Math.abs(hqBlock - pickUpBlock);
}

function distanceFromHqInFeet(pickUpBlock){
    const distanceInblocks = distanceFromHqInBlocks(pickUpBlock);
    return distanceInblocks * blockLength;

}

function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceToHQ = distanceFromHqInFeet(startBlock);
    const distanceToEnd = distanceFromHqInFeet(endBlock);
    return Math.abs(distanceToHQ - distanceToEnd);
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet <= 2000) {
        return 0.02 * (distanceInFeet - 400);
    } else if (distanceInFeet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}