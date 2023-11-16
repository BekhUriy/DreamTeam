export function setActive(evt) {
  const category = document.querySelector('.category');

    const activeCategory = evt.target

      const allCategories = category.querySelectorAll('a');

  allCategories.forEach(category => {
    category.classList.remove('active');

  });
    activeCategory.classList.add('active')
    
  }