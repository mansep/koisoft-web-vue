<template id="tplNav">
    <div>
        <div class="logo">&gt;&lt;&gt;</div>
        <nav class="nav">
            <router-link class="nav-link active" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
            <router-link class="nav-link" to="/contact">Contact</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    template: '#tplNav',
    name: "NavBar"
}
</script>