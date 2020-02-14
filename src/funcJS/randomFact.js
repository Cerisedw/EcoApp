import $ from 'jquery';

const randomFacts = ['Landfills are composed of 35% of packaging materials.', 'The term ecology was first coined by Ernst Haeckel in 1866.', '40 percent of all bottled water sold in the world is bottled tap water.', 'Paper can be recycled only six times. After that, the fibers are too weak to hold together.', 'Humans and elephants are the only animals with chins', 'The world’s oldest trees are more than 4,600 years old', '27,000 trees are cut down each day so we can have Toilet Paper', 'Aluminium can be recycled continuously, as in forever', 'American companies alone use enough paper to encircle the Earth 3x', 'A glass bottle made in our time will take more than 4,000 years to decompose'];
function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function displayScroll() {
  const text = randomFacts[randInt(randomFacts.length)];
  return text;
}


export const randomText = () => {
  $('#randomText').empty();
  const phrase = displayScroll();
  $('#randomText').append(phrase);
};
