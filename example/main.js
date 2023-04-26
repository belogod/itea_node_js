function printNumbers() {
    let count = 1;
    const interval = setInterval(() => {
        console.log(count);
        count++;
        if (count > 20) {
            clearInterval(interval);
        }
    }, 100);
}

printNumbers();
