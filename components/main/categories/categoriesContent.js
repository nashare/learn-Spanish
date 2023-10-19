export function categoriesContent(category, baseUrl) {
    return `<li class="category">
                <a href="${baseUrl}/categories/${category}/${category}.html" class="categories-link">
                    <img src="${baseUrl}/content/${category}/${category}.jpg" id="image-${category}" class="categories-image">
                    <p class="categories-text" id="text-${category}">${category.toUpperCase()}</p>
                </a>
            </li>`
}