async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!"); // Resolves after 2 seconds
        }, 5000);
    });
}

async function asyncExample() {
    console.log("Fetching data...");

    try {
        const result = await fetchData(); // This waits for the promise to resolve
        console.log("Result:", result);
        console.log("Data processing...");
    } catch (error) {
        console.log("Error:", error);
    }

    console.log("End");
}

asyncExample();
console.log("!!! This will run before the async function completes.");
