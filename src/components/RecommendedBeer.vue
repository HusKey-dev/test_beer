<template>
    <div class="beer">
        <h3>Recommended Beer</h3>
        <hr />
        <p>Brand: {{ beer.brand }}</p>
        <p>Name: {{ beer.name }}</p>
        <div class="beer__description">
            <br />
            <p>Style: {{ beer.style }}</p>
            <p>Hop: {{ beer.hop }}</p>
            <p>Yeast: {{ beer.yeast }}</p>
            <p>Malts: {{ beer.malts }}</p>
            <p>Ibu: {{ beer.ibu }}</p>
            <p>Alcohol: {{ beer.alcohol }}</p>
            <p>Blg: {{ beer.blg }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: mapState({
        beer: (state) => state.beer,
    }),
};
</script>

<style lang="scss" scoped>
.beer {
    padding: 15px;
    line-height: 1.5rem;
    font-size: 1.1rem;

    hr {
        margin: 5px 0px;
    }
}
</style>