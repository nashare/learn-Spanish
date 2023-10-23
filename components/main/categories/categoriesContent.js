export function categoriesContent(category) {
    return `<li class='category'>
                <a href='/categories/${category}/${category}.html' class='link'>
                    <img src='/content/${category}/${category}.jpg' id='image-${category}'>
                    <p class='button-yellow' id='text-${category}'>${category.toUpperCase()}</p>
                </a>
            </li>`
}