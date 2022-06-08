export const men_BMR = (weight, height, age) => {
    const calories = (
      88.362 +
      13.397 * weight +
      4.799 * height -
      5.677 * age
    ).toFixed();
    return calories;
  };
  
  export const women_BMR = (weight, height, age) => {
    const calories = (
      447.593 +
      9.247 * weight +
      3.098 * height -
      4.33 * age
    ).toFixed();
    return calories;
  };
  
  export const activityIndicator = (dailyCalories, activity) => {
    if (activity === "bmr") {
      return dailyCalories;
    }
    if (activity === "senedentary") {
      return (dailyCalories * 1.2).toFixed();
    }
    if (activity === "light") {
      return (dailyCalories * 1.375).toFixed();
    }
    if (activity === "moderately") {
      return dailyCalories * (1.55).toFixed();
    }
    if (activity === "very") {
      return (dailyCalories * 1.725).toFixed();
    }
    if (activity === "extra") {
      return (dailyCalories * 1.9).toFixed();
    }
  };
  
  export const _textTrim = text => {
    const trimmed = text.split(" ").join("+");
    return trimmed;
  };
  
  export const _textReductor = state => {
    const calories = state.targetCalories;
    const diet = state.selected;
    const exclude = state.text;
  
    if (diet.trim().length === 0 && exclude.trim().length === 0) {
      return `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}`;
    }
  
    if (diet.trim().length !== 0 && exclude.trim().length === 0) {
      return `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}&diet=${diet}`;
    }
  
    if (diet.trim().length === 0 && exclude.trim().length !== 0) {
      let ex = exclude
        .split(" ")
        .join("%2C+")
        .split(",")
        .join("");
  
      return `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}&exclude=${ex}`;
    }
  
    let ex = exclude
      .split(" ")
      .join("%2C+")
      .split(",")
      .join("");
  
    return `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=${ex}`;
  };
  
  
 
  
  export const _isEmpty = question => {
    return !question.replace(/\s+/, "").length;
  };