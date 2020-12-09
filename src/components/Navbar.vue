<template>
  <div>
    <nav>
      <v-app-bar color="white" elevate-on-scroll class="px-12" fixed app>
        <v-toolbar-title>
          <img
            src="../assets/images/logo.png"
            alt="image"
            style="max-width: 100px"
          />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog width="350">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              class="text-none"
              dark
              v-bind="attrs"
              outlined
              v-on="on"
            >
              Login
            </v-btn>
          </template>

          <v-card>
            <div style="text-align: center" class="py-3">
              <h2 class="pb-3">Sign in to</h2>
              <v-img
                :src="require('../assets/images/logo.png')"
                class="mx-12 mb-3"
              ></v-img>
            </div>

            <v-card-text style="text-align: center">
              <p>
                Login using your google account to find a mentor or become a
                mentor now.
              </p>
              <v-btn block large color="primary" to="/register">
                <v-icon left dark> mdi-google </v-icon>
                Google
              </v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-app-bar>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style></style>
