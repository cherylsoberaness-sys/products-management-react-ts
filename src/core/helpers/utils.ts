export const normalize = (word: string) => {
    const newWord = word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    return newWord;
}