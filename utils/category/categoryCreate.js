import { shuffleArray } from "../shuffleArr.js";
import { categoryContent } from "../../components/main/category/categoryContent.js";

export function categoryCreate(categoryName, arr) {
    let categoryHTML = '';
    let shuffledArr = shuffleArray(arr);

    shuffledArr.forEach(word => {
        categoryHTML += categoryContent(categoryName, word);
    });

    return categoryHTML;
}
