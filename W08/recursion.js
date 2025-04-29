function feedCrackerToBird(numberOfCrackers){
    if (numberOfCrackers <= 0) {
        console.log("No more crackers left to feed the bird.");
    } else {
        console.log(`Feeding cracker ${numberOfCrackers} to bird`);
        return feedCrackerToBird(numberOfCrackers - 1);
    }
}



/*Note: Removing the -1 will result in an infinite loop because the function 
will never reach the base case of 0 crackers.*/

feedCrackerToBird(5); // Output: "Feeding cracker to bird" 5 times