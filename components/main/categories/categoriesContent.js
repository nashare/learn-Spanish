export function categoriesContent(category) {
    return `<li class='category'>
                <a href='/categories/${category}/${category}.html' class='link categories-link'>
                    <img src='/content/${category}/${category}.jpg' class='border-buttom-straight' id='image-${category}'>
                    <p id='text-${category}' class='categories-name'>${category.toUpperCase()}</p>
                </a>
                <div class='categories-links'>
                    <a href='/categories/${category}/${category}.html' class='categories-link-bottom'>Study</a>
                    <a href='/categories/${category}/test-1/test-1.html' class='categories-tests categories-link-bottom'' id=${category}>Practice</a>
                </div>
            </li>`
}