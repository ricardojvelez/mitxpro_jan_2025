const numbers = ["bananas", "peach", "bananas", "bananas", "strawberries", "peach"];

function countFrequence(collection){
    const store = {}; // Object to store the frequency of each number == STORE

    for(let i = 0; i < collection.length; i++){
        const currentValue = collection[i];

        if(store[currentValue]){ 
            store[currentValue] = store[currentValue] + 1;
        } else {
            store[currentValue] = 1; 
        }

        console.log(store);
    }

    return store;
}



countFrequence(numbers); // Output: { bananas: 3, peach: 2, grapes: 1, strawberries: 1 }