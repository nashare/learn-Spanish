import { baseUrl } from "../../constants/baseUrl.js";
import { categoriesContent } from "../../components/main/categories/categoriesContent.js";

export function categoriesCreate(wordsObj) {
    let categoriesHTML = '';

    Object.keys(wordsObj).forEach(category => {
        categoriesHTML += categoriesContent(category, baseUrl);
    });

    return categoriesHTML;
}
