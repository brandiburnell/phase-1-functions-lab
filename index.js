// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    return Math.abs(42-someValue);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination)*264);
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance < 400) {
        return 0;
    }
    else if (distance >= 400 && distance < 2000) {
        return 0.02*(distance-400);
    }
    else if (distance >= 2000 && distance < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}