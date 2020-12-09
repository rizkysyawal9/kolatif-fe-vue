<template>
    <v-app>
        <dashboard-nav />
        <v-main>
            <router-view class="grey lighten-4" />
        </v-main>
        <!-- <v-snackbar :v-model="snackbar.showing" timeout="6000">
            {{ snackbar.text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar> -->
        <footer />
    </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '../components/Footer'
import DashboardNav from '../components/DashboardNav'
export default {
    components: {
        DashboardNav,
        Footer,
    },

    computed: {
        ...mapState('snackbar', {
            snackbar: state => state.snackbar,
        }),
    },
}
</script>
