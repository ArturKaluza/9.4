function drawTree(n) {
    n = n+1;
    for (let i =0; i < 2*n-1; i++) {
        if (i % 2 == 0) {
            continue;
        } else {
            let star = "";
            let space = Math.floor(((2*n-1)-i)/2);

            for (let k = 0; k < space; k++) {
                star += ' ';
            }

            for (let j = 0; j < i; j++) {
                star += '*';
            }
            console.log(star);
        }
    }
}

drawTree(6);
drawTree(4);
drawTree(8);

