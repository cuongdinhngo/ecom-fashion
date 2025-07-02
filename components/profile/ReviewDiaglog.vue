<template>
  <v-dialog
    min-width="100%"
    scrollable
    v-model="reviewDialog"
  >
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span class="text-h5 font-weight-bold">Review</span>
          <v-btn
            variant="text"
            size="small"
            icon
            @click="isActive.value = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-list-item
        >
          <template #prepend>
            <ItemsAvatar
              :avatar="smallProductImg()"
              size="50"
              :frame-size="{ width: '60px', height: '60px' }"
            />
          </template>
          <v-list-item-title class="text-subtitle-2 ml-2">
            Product Name
          </v-list-item-title>
          <v-list-item-title class="text-subtitle-1 font-weight-bold ml-2">
            Order #123456789
          </v-list-item-title>
        </v-list-item>

        <v-rating
          color="primary"
          size="x-large"
          active-color="amber-darken-1"
        ></v-rating>

        <v-card-text>
          <v-textarea
            label="Write your review here..."
            rows="4"
            variant="solo-filled"
            flat
          ></v-textarea>
          <v-btn
            color="primary"
            variant="flat"
            class="text-none rounded-lg"
            width="100%"
            @click="doneDialog = true; reviewDialog = false;"
          >Submit Review</v-btn>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>

  <ProfileDoneReview
    v-model:done-dialog="doneDialog"
  />
</template>
<script setup lang="ts">
const reviewDialog = defineModel('reviewDialog', {
  type: Boolean,
  default: false,
});

const doneDialog = ref(false);
</script>