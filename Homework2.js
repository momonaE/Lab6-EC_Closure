function printNumbers(from, to) {
    let timer = setInterval(() => {

        console.log(from);
        if (from == to) {
            clearInterval(timer);
        }
        from++;

    }, 1000);


}

printNumbers(2, 6);