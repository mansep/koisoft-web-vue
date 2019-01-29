<template id="tplNav">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-12 text-center">
                <div class="logo">
                    <img src="../assets/img/logo.png" width="200" >
                </div>
            </div>
            <div class="col-lg-8 col-sm-12 text-center">
                <nav class="nav">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <router-link class="nav-link" to="/services">Services</router-link>
                    <router-link class="nav-link" to="/about">About</router-link>
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    template: '#tplNav',
    name: "NavBar"
}
</script>