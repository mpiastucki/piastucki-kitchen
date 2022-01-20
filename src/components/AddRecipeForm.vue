<template>
    <form action="http://localhost:9000/api/addrecipe">
        <label for="recipe-name">Recipe Name
            <input type="text" name="recipe-name" id="name" required>
        </label>
        <label for="ingredient1">First Ingredient
            <input type="text" name="ingredient1" id="ingredient1">
        </label>
        <label for="ingredient2">Second Ingredient
            <input type="text" name="ingredient2" id="ingredient2">
        </label>
        <label for="ingredient3">Third Ingredient
            <input type="text" name="ingredient3" id="ingredient3">
        </label>
        <label for="">Breakfast
            <input type="checkbox">
        </label>
        <label for="">Lunch
            <input type="checkbox">
        </label>
        <label for="">Dinner
            <input type="checkbox">
        </label>
        <input type="submit">
    </form>
</template>
