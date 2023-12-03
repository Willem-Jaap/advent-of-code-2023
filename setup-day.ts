const day = Deno.args[0];

console.log(`Setting up day ${day}...`);

await Deno.mkdir(`day-${day}`);
console.info(`Created folder day-${day}`);

await Deno.writeTextFile(`day-${day}/input.txt`, "");
console.log(`Created input.txt`);

await Deno.writeTextFile(`day-${day}/example.txt`, "");
console.log(`Created example.txt`);

await Deno.writeTextFile(
    `day-${day}/index.ts`,
    `
const input = await Deno.readTextFile("./day-${day}/example.txt");

const lines = input.split('\\n');

console.log(lines);

export {};
`
);

export {};
