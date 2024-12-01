const fs = require("node:fs/promises");
const readFile = fs.readFile
async function main() {
    const input = (await readFile("./input.txt")).toString();
    const [left, right] = input.split("\n").map(e => e.trim().split("   ")).reduce((acc, cur) => {
        acc[0].push(cur[0]);
        acc[1].push(cur[1]);
        return acc;
    },[[], []]);

    let mp = new Map(Array.from(new Set(left)).map(e => [e, 0]));

    for(let i = 0; i < right.length; i++) {
        if(mp.get(right[i]) != undefined) {
            mp.set(right[i], mp.get(right[i]) + 1);
        }
    }

    let result = 0;
    mp.forEach((val, key, _) => result += val*key);
    console.log(result);
}

(async () => main())();