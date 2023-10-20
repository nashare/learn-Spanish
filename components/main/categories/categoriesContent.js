export function categoriesContent(category) {
    return `<li class='category'>
                <a href='/categories/${category}/${category}.html' class='categories-link'>
                    <img src='/content/${category}/${category}.jpg' id='image-${category}' class='categories-image'>
                    <p class='categories-text' id='text-${category}'>${category.toUpperCase()}</p>
                </a>
            </li>`
}