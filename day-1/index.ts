const input = await Deno.readTextFile("./day-1/input.txt");

const lines = input.split("\n");

const numbers = lines.map((line: string) => {
    const numbers = line.match(/\d/g);
    if (!numbers || numbers.length < 1) return 0;

    return Number(numbers[0] + numbers[numbers.length - 1]);
});

const total = numbers.reduce((acc: number, number: number) => acc + number);
console.log(total);

export {};
