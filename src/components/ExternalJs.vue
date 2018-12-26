<script>
export default {
    name:"ExternalJs",
    mounted() {
        let scriptMaps = document.createElement('script')
        scriptMaps.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=[YOUR API KEY HERE]')
        document.head.appendChild(scriptMaps)
    },
}
</script>
