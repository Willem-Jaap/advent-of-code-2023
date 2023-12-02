const input = await Deno.readTextFile("./day-2/input.txt");

const lines = input.split("\n");
console.log(lines);

type Color = "red" | "green" | "blue";
type GameTotals = Record<Color, number>;

// Part 1
const validGames: number[] = [];
lines.forEach((line: string) => {
    const [name, content] = line.split(": ");
    const [, id] = name.split(" ");

    const sets = content.split("; ");

    const totals: GameTotals = {
        red: 0,
        green: 0,
        blue: 0,
    };
    let isValid = true;

    sets.forEach((set: string) => {
        const cubes = set.split(", ");

        cubes.forEach((cube: string) => {
            const [amount, color] = cube.split(" ");
            if (
                (color === "red" && Number(amount) > 12) ||
                (color === "green" && Number(amount) > 13) ||
                (color === "blue" && Number(amount) > 14)
            ) {
                isValid = false;
            }

            if (!totals[color]) {
                totals[color] = Number(amount);
                return;
            }

            totals[color] = totals[color] + Number(amount);

            if (!isValid) return;
            isValid = true;
        });
    });

    if (isValid) {
        validGames.push(Number(id));
    }
});

const totalValidGames = validGames.reduce((acc: number, id: number) => acc + id);
console.log(totalValidGames);

// Part 2
let powerSum = 0;

lines.forEach((line: string) => {
    const [name, content] = line.split(": ");
    const sets = content.split("; ");

    const minimums: GameTotals = {
        red: 0,
        green: 0,
        blue: 0,
    };

    sets.forEach((set: string) => {
        const cubes = set.split(", ");

        cubes.forEach((cube: string) => {
            const [amount, color] = cube.split(" ");

            if (minimums[color] < amount) minimums[color] = Number(amount);
        });
    });

    powerSum += Object.values(minimums).reduce((acc: number, amount: number) => acc * amount);
});

console.log(powerSum);

export {};
