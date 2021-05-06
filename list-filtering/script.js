const adventureList = [
  // 'Mountain Bike Tour',
  // 'Hinterlands Tour',
  // 'Sky Diving',
  // 'Local Food Festival',
  // 'Sunday Markets Tour',
  // 'Food Tasting Tour',
  // 'Snorkelling Tour',
  // 'Forest Experience',
];

const adventures = document.getElementsByClassName('adventure');

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', (event) => {
  const text = searchBar.value;
  for (const adventure of adventures) {
    if (adventure.innerHTML.indexOf(text) < 0) {
      adventure.style.display = 'None';
    } else {
      adventure.style.display = 'Block';
    }
  }
})
