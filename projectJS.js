function generateMealPlan() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let mealPlanWindow = window.open('', '_blank');
}