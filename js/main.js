const recipes = [
  {
    id: 0,
    name: "Slow Cooked Beef Stew",
    desc: "Rich and hearty stew cooked for hours",
    img: "./imgs/0.jpeg",
    rating: 4.9,
    reviews: 312,
    prep: "70 min",
    cook: "180 min",
    servings: "6",
    tags: ["Advanced", "Comfort Food"],
    ingredients: [
      "1.5kg beef chuck, cubed",
      "3 carrots, chopped",
      "4 potatoes, cubed",
      "2 onions, diced",
      "4 cloves garlic, minced",
      "1 cup red wine",
      "4 cups beef broth",
      "3 tablespoons tomato paste",
      "Fresh thyme and rosemary",
      "Salt and pepper to taste",
    ],
    steps: [
      "Season beef cubes with salt and pepper.",
      "Brown beef in batches in a large pot.",
      "Sauté onions and garlic until fragrant.",
      "Add red wine to deglaze the pot.",
      "Add beef back with vegetables, broth, and herbs.",
      "Simmer on low heat for 3 hours until tender.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "38g",
      carbs: "22g",
      fat: "18g",
      fiber: "4g",
      sodium: "890mg",
    },
    tips: [
      "Cook a day ahead for better flavor development",
      "Use good quality red wine for richer taste",
      "Don't rush the browning of the beef",
      "Serve with crusty bread to soak up the sauce",
    ],
  },
  {
    id: 1,
    name: "Creamy Spaghetti Carbonara",
    desc: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    img: "./imgs/1.jpeg",
    rating: 4.8,
    reviews: 234,
    prep: "15 min",
    cook: "20 min",
    servings: "4",
    tags: ["Easy", "Italian"],
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    steps: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "62g",
      fat: "18g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
    ],
  },
  {
    id: 2,
    name: "Honey Garlic Salmon",
    desc: "Pan-seared salmon with a sweet and savory glaze",
    img: "./imgs/2.jpeg",
    rating: 4.9,
    reviews: 187,
    prep: "10 min",
    cook: "15 min",
    servings: "2",
    tags: ["Easy", "Seafood"],
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    steps: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "35g",
      carbs: "28g",
      fat: "14g",
      fiber: "0g",
      sodium: "720mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    id: 3,
    name: "Classic Beef Burger",
    desc: "Juicy homemade burger with all the fixings",
    img: "./imgs/3.jpeg",
    rating: 4.6,
    reviews: 421,
    prep: "15 min",
    cook: "20 min",
    servings: "4",
    tags: ["Easy", "American"],
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    steps: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutrition: {
      calories: "650 kcal",
      protein: "38g",
      carbs: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    id: 4,
    name: "Mediterranean Quinoa Bowl",
    desc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    img: "./imgs/4.jpeg",
    rating: 4.5,
    reviews: 156,
    prep: "20 min",
    cook: "35 min",
    servings: "2",
    tags: ["Easy", "Mediterranean"],
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "2 tablespoons olive oil",
      "1 lemon, juiced",
      "2 tablespoons tahini",
      "1 garlic clove, minced",
      "Salt and pepper to taste",
    ],
    steps: [
      "Rinse quinoa under cold water. In a saucepan, bring vegetable broth to a boil.",
      "Add quinoa, reduce heat to low, cover and simmer for 15-20 minutes until liquid is absorbed.",
      "While quinoa cooks, prepare vegetables: dice cucumber, halve tomatoes, slice onion.",
      "For the dressing: whisk together olive oil, lemon juice, tahini, garlic, salt and pepper.",
      "Fluff quinoa with a fork and let cool slightly.",
      "Assemble bowls: divide quinoa between two bowls, arrange vegetables on top.",
      "Sprinkle with feta cheese, olives and parsley.",
      "Drizzle with tahini dressing before serving.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "18g",
      carbs: "58g",
      fat: "20g",
      fiber: "10g",
      sodium: "540mg",
    },
    tips: [
      "Toast quinoa in a dry pan for 2-3 minutes before cooking for nuttier flavor",
      "Make the dressing ahead of time - flavors improve as they meld",
      "Add grilled chicken or chickpeas for extra protein",
      "Use vegetable broth instead of water for more flavorful quinoa",
    ],
  },
  {
    id: 5,
    name: "Caesar Salad",
    desc: "Classic salad with crispy romaine and creamy dressing",
    img: "./imgs/5.jpeg",
    rating: 4.4,
    reviews: 198,
    prep: "15 min",
    cook: "0 min",
    servings: "2",
    tags: ["Easy", "Mediterranean"],
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    steps: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "12g",
      carbs: "18g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
];

// Variables
let currentIndex = 0;
const recipeImg = document.getElementById("recipeImg");
const recipeName = document.getElementById("recipeName");
const recipeDesc = document.getElementById("recipeDesc");
const recipeRating = document.getElementById("recipeRating");
const prepTime = document.getElementById("prepTime");
const cookTime = document.getElementById("cookTime");
const servings = document.getElementById("servings");
const recipeTags = document.getElementById("recipeTags");
const ingredientsList = document.getElementById("ingredientsList");
const instructionsList = document.getElementById("instructionsList");
const tipsList = document.getElementById("tipsList");
const timeWarning = document.getElementById("timeWarning");
const caloriesValue = document.getElementById("caloriesValue");
const proteinValue = document.getElementById("proteinValue");
const carbsValue = document.getElementById("carbsValue");
const fatValue = document.getElementById("fatValue");
const fiberValue = document.getElementById("fiberValue");
const sodiumValue = document.getElementById("sodiumValue");
const tryBtn = document.getElementById("tryBtn");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

// Load Recipe
function loadRecipe(index) {
  const recipe = recipes[index];

  // Update basic info
  recipeImg.src = recipe.img;
  recipeImg.alt = recipe.name;
  recipeName.textContent = recipe.name;
  recipeDesc.textContent = recipe.desc;
  recipeRating.innerHTML = `<i class="fa fa-star"></i> <span class="rating-value">${recipe.rating}</span> <span class="rating-count">(${recipe.reviews})</span>`;
  prepTime.textContent = recipe.prep;
  cookTime.textContent = recipe.cook;
  servings.textContent = recipe.servings;

  // Update tags
  recipeTags.innerHTML = "";
  recipe.tags.forEach((tag, i) => {
    const tagClass = i === 0 ? "tag easy" : "tag cuisine";
    recipeTags.innerHTML += `<span class="${tagClass}">${tag}</span>`;
  });

  // Show/hide warning
  const prepMinutes = parseInt(recipe.prep);

  if (prepMinutes > 45) {
    timeWarning.style.display = "flex";
  } else {
    timeWarning.style.display = "none";
  }

  // Update ingredients
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach((ingredient, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <div class="ingredient-number">${i + 1}</div>
            <div class="ingredient-text">${ingredient}</div>
        `;
    ingredientsList.appendChild(li);
  });

  // Update instructions
  instructionsList.innerHTML = "";
  recipe.steps.forEach((step, i) => {
    const div = document.createElement("div");
    div.className = "instruction";
    div.innerHTML = `
            <div class="step-number">${i + 1}</div>
            <div class="step-text">${step}</div>
        `;
    instructionsList.appendChild(div);
  });

  // Update nutrition
  caloriesValue.textContent = recipe.nutrition.calories;
  proteinValue.textContent = recipe.nutrition.protein;
  carbsValue.textContent = recipe.nutrition.carbs;
  fatValue.textContent = recipe.nutrition.fat;
  fiberValue.textContent = recipe.nutrition.fiber;
  sodiumValue.textContent = recipe.nutrition.sodium;

  // Update tips
  tipsList.innerHTML = "";
  recipe.tips.forEach((tip) => {
    const div = document.createElement("div");
    div.className = "tip";
    div.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <p>${tip}</p>
        `;
    tipsList.appendChild(div);
  });
}

// Tab Switching
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(`${tabId}Tab`).classList.add("active");
  });
});

// Try Another Recipe
tryBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % recipes.length;
  loadRecipe(currentIndex);

  tabBtns.forEach((btn) => btn.classList.remove("active"));
  tabPanes.forEach((pane) => pane.classList.remove("active"));
  document.querySelector('[data-tab="ingredients"]').classList.add("active");
  document.getElementById("ingredientsTab").classList.add("active");
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadRecipe(currentIndex);
});