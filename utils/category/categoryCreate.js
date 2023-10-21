import { categoryContent } from '../../components/main/category/categoryContent.js';

export function categoryCreate(categoryName, arr) {
    let categoryHTML = '';
    let shuffledArr = chance.shuffle(arr);

    shuffledArr.forEach(word => {
        categoryHTML += categoryContent(categoryName, word);
    });

    return categoryHTML;
}
