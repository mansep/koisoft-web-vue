<template>
    <gmap-map   
        :center="{lat: 10, lng: 10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 300px"
    />
</template>
<script>
    import {gmapApi} from 'vue2-google-maps'

    export default {
        name: "GoogleMap",
        computed: {
            google: gmapApi
        }
    }
</script>