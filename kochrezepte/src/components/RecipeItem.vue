<template>
    <div class="recipeItemContainer">
        <img class="recipe-image" :src="myImagePizza" alt="">
        <div class="right-side">
            <div>{{ label }}</div>
            <div class="bottom-row">{{ attributes }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeItem',
    data() {
        return {
            myImagePizza: require('@/assets/pizza.png'),
            label: 'Sushi-Rolls',
            attributes: 'Frische, Vegan, Fettarm'
        }
    },
}
</script>

<style scoped>
.recipeItemContainer {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 8px;
    margin: 8px;
    display: flex;
    gap: 26px;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    cursor: pointer;
}

.recipeItemContainer:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.recipe-image {
    height: 100px;
}

.right-side {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.bottom-row {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
}
</style>