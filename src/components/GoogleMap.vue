<template>
    <gmap-map   
        :center="{lat: settings.lat, lng: settings.lng}"
        :zoom=settings.zoom
        map-type-id="roadmap"
        style="width: 100%; height: 360px"
    />
    <!--
        "roadmap":      displays the default road map view. This is the default map type.
        "satellite":    displays Google Earth satellite images.
        "hybrid":       displays a mixture of normal and satellite views.
        "terrain":      displays a physical map based on terrain information. 
    -->
</template>
<script>
    import Settings from '../settings';
    export default {
        name: "GoogleMap",
        data: function(){
            return {
                settings: Settings.gmap
            }
        }
    }
</script>