<template>
  <v-app>
    <v-main>
      <v-container class="fill-height ma-0 pa-0">
        <v-row no-gutters class="align-center justify-center">
          <v-col cols="12" md="12" class="text-center">
            <v-card
              class="bg-transparent elevation-0 py-8 d-flex flex-column"
              min-height="100vh"
            >
              <!-- Top section with auto margin -->
              <v-spacer></v-spacer>
              
              <!-- Middle section (centered) -->
              <div>
                <slot name="content">
                  Default content goes here
                </slot>
              </div>
              
              <!-- Spacer to push actions to bottom -->
              <v-spacer></v-spacer>
              
              <!-- Bottom actions -->
              <v-card-actions class="justify-center d-flex flex-column">
                <slot name="actions">
                  Default actions go here
                </slot>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>