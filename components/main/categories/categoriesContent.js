export function categoriesContent(category) {
    return `<li class='category' id='content-${category}'>
                <a href='/categories/${category}/${category}.html' class='link categories-link'>
                    <img src='/content/${category}/${category}.jpg' class='border-buttom-straight'>
                    <p id='text-${category}' class='categories-name'>${category.toUpperCase()}</p>
                </a>
                <div class='categories-links'>
                    <a href='/categories/${category}/${category}.html' class='button-yellow categories-link-bottom'>Study</a>
                    <a href='/categories/${category}/test-1/test-1.html' class='categories-tests button-yellow categories-link-bottom'' id=${category}>Tests</a>
                </div>
            </li>`
}