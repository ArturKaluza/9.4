function drawTree(n) {
    for (let i =0; i < n; i++) {
        let star = "";
        for (let j = 0; j < i; j++) {
            star += '*';
        }
        console.log(star);
    }
}

console.log(drawTree(6));
console.log(drawTree(4));
console.log(drawTree(8));
