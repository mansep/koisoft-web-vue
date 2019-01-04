<template>
    <gmap-map   
        :center="{lat: 10, lng: 10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 360px"
    />
</template>
<script>
    export default {
        name: "GoogleMap",
    }
</script>