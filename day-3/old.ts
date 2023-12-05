const input = await Deno.readTextFile("./day-3/test.txt");

const lines = input.split("\n");

// Split each line into an array of numbers and dots
const characterLines = lines.map((line) =>
    line.split(/(\d+|\.|(#|\*|\+|$|%|&|\/|@))/g).filter((line) => line?.length > 0)
);

const validNumbers: number[] = [];

characterLines.forEach((line: string[], lineIndex: number) => {
    // Length of numbers in the line as they are not split
    let numberIndex = 0;
    line.forEach((character: string, characterIndex: number) => {
        if (character.match(/\d+/g)) {
            // const previousCharacter = line?.[characterIndex - 1];
            // const nextCharacter = line?.[characterIndex + 1];
            const [number] = character.match(/(\d+)/g) ?? [];
            numberIndex += number?.length ?? 0;

            const previousLine = lines?.[lineIndex - 1] ?? "";
            const nextLine = lines?.[lineIndex + 1] ?? "";
            const numberLength = number?.length ?? 0;

            // Get all characters around the number including diagonals, handle the length of the number
            const previousCharacters = previousLine?.slice(characterIndex, characterIndex + numberLength + 2);

            const currentCharacters = lines[lineIndex]
                ?.slice(characterIndex, characterIndex + numberLength + 2)
                .replace(number, "");

            const nextCharacters = nextLine?.slice(characterIndex, characterIndex + numberLength + 2);

            const characters = [previousCharacters, currentCharacters, nextCharacters];
        }
    });
});

const total = validNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);

export {};
