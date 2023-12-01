const input = await Deno.readTextFile("./day-1/input.txt");

const lines = input.split("\n");

const map = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};

const correctLines = lines.map((line) => {
    Object.entries(map).forEach(([number, string]) => {
        line = line.replaceAll(string, string + number + string);
    });

    return line;
});

const numbers = correctLines.map((line: string) => {
    const numbers = line.match(/\d/g);
    if (!numbers || numbers.length < 1) return 0;

    return Number(numbers[0] + numbers[numbers.length - 1]);
});

const total = numbers.reduce((acc: number, number: number) => acc + number);
console.log(total);

export {};
