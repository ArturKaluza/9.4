function drawTree(n) {
    for (let i =0; i < n; i++) {
        
        let star = "";
        let space = ((n-i)/2).toFixed();
        
        for (let k = 0; k < space; k++) {
            star += ' ';
        }
        
        for (let j = 0; j < i; j++) {
            star += '*';
        }
        console.log(star);
    }
}

drawTree(6);
drawTree(4);
drawTree(8);

