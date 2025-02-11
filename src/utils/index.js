// get all coffees from local storage
const getAllFavorites = () => {
 const all = localStorage.getItem("favorite")

 if (all) {
  const favorites = JSON.parse(all)

  return favorites
 } else {
  return []
 }

}


// add a coffee to local storage
const addFavorite = coffee => {
 //get all coffees from local storage

 const favorites = getAllFavorites();
 const isExist = favorites.find(item => item.id == coffee.id)
 if (isExist) return alert("Already exist")
 favorites.push(coffee)
 localStorage.setItem('favorite', JSON.stringify(favorites));
}

// remove a coffee from local storage
const removeFavorite = (id) => {
 const favorites = getAllFavorites();
 const remaining = favorites.filter(coffee => coffee.id != id)
 localStorage.setItem('favorite', JSON.stringify(remaining));
}

export { addFavorite, getAllFavorites, removeFavorite }