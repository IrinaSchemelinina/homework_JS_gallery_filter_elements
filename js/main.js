function galleryFilter() {
    const buttons = document.querySelectorAll('.button')
    const img = document.querySelectorAll('.column')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFilter = !item.classList.contains(category)
            const showAll = category.toLowerCase() === 'all'
            if (isItemFilter && !showAll) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const imgCategory = button.dataset.filter
            filter(imgCategory, img)
        })
    })
}