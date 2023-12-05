function updateMealOptions() {
    let selectedGoal = document.querySelector('input[name="goal"]:checked').value;

    let breakfastOptions = getMealOptions(selectedGoal, "breakfast");
    let lunchOptions = getMealOptions(selectedGoal, "lunch");
    let dinnerOptions = getMealOptions(selectedGoal, "dinner");
    let snackOptions = getMealOptions(selectedGoal, "snack");

    document.getElementById("breakfast").innerHTML = breakfastOptions;
    document.getElementById("lunch").innerHTML = lunchOptions;
    document.getElementById("dinner").innerHTML = dinnerOptions;
    document.getElementById("snack1").innerHTML = snackOptions;
    document.getElementById("snack2").innerHTML = snackOptions;
}

function getMealOptions(goal, mealType) {
    switch (goal) {
        case "Build Muscle":
            switch (mealType) {
                case "breakfast":
                    return "<option value='Eggs'>Eggs</option><option value='Oatmeal'>Oatmeal</option><option value='Banana'>Banana</option>";
                case "lunch":
                    return "<option value='GrilledChicken'>Grilled Chicken</option><option value='Quinoa'>Quinoa</option><option value='Broccoli'>Broccoli</option>";
                case "dinner":
                    return "<option value='Salmon'>Salmon</option><option value='SweetPotato'>Sweet Potato</option><option value='Asparagus'>Asparagus</option>";
                case "snack":
                    return "<option value='Almonds'>Almonds</option><option value='GreekYogurt'>Greek Yogurt</option><option value='ProteinBar'>Protein Bar</option>";
                default:
                    return "";
            }
        case "Lose Fat":
            switch (mealType) {
                case "breakfast":
                    return "<option value='AvocadoToast'>Avocado Toast</option><option value='Smoothie'>Smoothie</option><option value='Berries'>Berries</option>";
                case "lunch":
                    return "<option value='Salad'>Salad</option><option value='TurkeyWrap'>Turkey Wrap</option><option value='CauliflowerRice'>Cauliflower Rice</option>";
                case "dinner":
                    return "<option value='GrilledFish'>Grilled Fish</option><option value='VegetableStirFry'>Vegetable Stir Fry</option><option value='Quinoa'>Quinoa</option>";
                case "snack":
                    return "<option value='CarrotSticks'>Carrot Sticks</option><option value='Hummus'>Hummus</option><option value='YogurtParfait'>Yogurt Parfait</option>";
                default:
                    return "";
            }
        case "Every Day":
            switch (mealType) {
                case "breakfast":
                    return "<option value='Cereal'>Cereal</option><option value='FruitYogurt'>Fruit Yogurt</option><option value='WholeWheatToast'>Whole Wheat Toast</option>";
                case "lunch":
                    return "<option value='Sandwich'>Sandwich</option><option value='Soup'>Soup</option><option value='Pasta'>Pasta</option>";
                case "dinner":
                    return "<option value='GrilledChicken'>Grilled Chicken</option><option value='BrownRice'>Brown Rice</option><option value='Vegetables'>Vegetables</option>";
                case "snack":
                    return "<option value='Nuts'>Nuts</option><option value='Fruit'>Fruit</option><option value='Cheese'>Cheese</option>";
                default:
                    return "";
            }
        default:
            return "";
    }
}

function generateMealPlan() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.querySelector('input[name="goal"]:checked').value;

// print meal plan function, incomplete
function printMealPlan() {
    window.print();
}

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let breakfastOption = document.getElementById("breakfast").value;
    let snack1Option = document.getElementById("snack1").value;
    let lunchOption = document.getElementById("lunch").value;
    let snack2Option = document.getElementById("snack2").value;
    let dinnerOption = document.getElementById("dinner").value;

    let mealPlanWindow = window.open('', '_blank');

    mealPlanWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Weekly Meal Plan</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        
        <body>
            <header>
                <p>Lacy Fields | WEB-115 | Section 0002</p>
                <h1>Perfectly Portioned Fitness</h1>
                <h2>Build Your Meal Plan</h2>
            </header>
            
            <main id="generatorText">
                <h2>Your Weekly Meal Plan</h2>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Goal for the Week: ${goal}</p>
                
                <h3>Meal Plan Details</h3>
                <ul>
                    <li>Breakfast: ${breakfastOption}</li>
                    <li>Snack 1: ${snack1Option}</li>
                    <li>Lunch: ${lunchOption}</li>
                    <li>Snack 2: ${snack2Option}</li>
                    <li>Dinner: ${dinnerOption}</li>
                </ul>
                
                <button onclick="printMealPlan()">Print Meal Plan</button>
                
            </main>
        </body>
        </html>
    `);
}