// winget install ImageMagick.Q8
const { exec } = require('node:child_process');
const { readdir } = require('node:fs/promises');
const path = require('node:path');

async function main() {
    const dirIn = 'tools/in';
    const dirOut = 'tools/out';
    for (const base of await readdir(dirIn)) {
        if (base === '.gitkeep') continue;
        const fileIn = `${dirIn}/${base}`;
        const file = path.parse(fileIn);
        const fileOut = `${dirOut}/${file.name}.webp`;

        const lossless = file.ext === '.png';
        const cmd = [
            `magick "${fileIn}"`,
            `-define webp:lossless=${lossless}`,
            `-define webp:target-size=200kb`,
            `"${fileOut}"`,
        ].join(' ');
        console.log(cmd);
        exec(cmd, (_err, stdout, stderr) => console.log(stdout + stderr));
    }
}

main();
