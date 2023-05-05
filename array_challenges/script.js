// Always Hungry
    console.log("---------------- Always Hungry ----------------")
    function alwaysHungry(arr) {
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == "food"){
                console.log("yummy");
            }
        }
    }
    alwaysHungry([3.14, "food", "pie", true, "food"]);
    alwaysHungry([4, 1, 5, 7, 2]);

// High Pass Filter
    console.log("---------------- High Pass Filter ----------------")
    function highPass(arr, cutoff) {
        var filteredArr = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > cutoff){
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr;
    }
    var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
    console.log(result);

// Better than average
    console.log("---------------- Better than average ----------------")
    function betterThanAverage(arr) {
        var sum = 0;
        for(var i = 0; i < arr.length ; i++){
            sum += arr[i];
        }
        var count = 0
        for(i = 0; i < arr.length; i++){
            if(arr[i] > sum/arr.length){
                count++;
            }
        }
        return count;
    }
    var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
    console.log(result);

// Array Reverse
    console.log("---------------- Array Reverse ----------------")
    function reverse(arr) {
        arr = arr.reverse()
        return arr;
    }
    var result = reverse(["a", "b", "c", "d", "e"]);
    console.log(result);

// Fibonacci Array
    console.log("---------------- Fibonacci Array ----------------")
    function fibonacciArray(n) {
        var fibArr = [0, 1];
        for(var i = 0; i < n-2; i++){
            fibArr.push(fibArr[i]+fibArr[i+1])
        }
        return fibArr;
    }
    var result = fibonacciArray(10);
    console.log(result);