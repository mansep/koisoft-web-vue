<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
    export default {
        name: 'google-map',
        props: ['name', 'lat', 'lng'],
        data: function () {
            return {
                mapName: this.name + "-map",
            }
        },
        mounted: function () {
            const element = document.getElementById(this.mapName)
            const options = {
                zoom: 14,
                center: new google.maps.LatLng(this.lat,this.lng)
            }
            const map = new google.maps.Map(element, options);
        }
    };
</script>
<style scoped>
    .google-map {
        width: 800px;
        height: 600px;
        margin: 0 auto;
        background: gray;
    }
</style>