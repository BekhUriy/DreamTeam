export function setActive() {
    const activeCategory = evt.target

      const allCategories = category.querySelectorAll('a');

  allCategories.forEach(category => {
    category.classList.remove('active');

  });
    activeCategory.classList.add('active')
    
  }