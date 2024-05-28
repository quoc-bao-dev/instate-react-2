import { clsx, type ClassValue } from "clsx";
import he from "he";
import { twMerge } from "tailwind-merge";

export const randomAnswer = (answers: string[]): string[] => {
    const newArr = [...answers];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const st = (s: string) => {
    return he.decode(s);
};
