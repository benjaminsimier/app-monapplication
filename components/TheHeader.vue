<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="header-logo">
                        <nuxt-link to="/">
                            <img src="~/assets/images/logo.svg" alt="">
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-8">
                    <div class="header-navigation">
                        <ul>
                            <li>
                                <nuxt-link to="/">
                                    Home
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about">
                                    About us
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/places">
                                    Our places
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/activities">
                                    Our activities
                                </nuxt-link>
                            </li>
                            <li class="btn">
                                <nuxt-link to="/contact">
                                    Travel now
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-on:click="add">
                    {{message}}
                </div>
                <div class="menu">

                </div>
            </div>
        </div>


    </header>
</template>

<script>
export default {
    methods: {
        add: function() {
            event.target.className += " myClass";
            event.target.className += " myClass";
        }
    },

    data() {
        return {
            message: 'gfg'
        }
    },
 }
</script>