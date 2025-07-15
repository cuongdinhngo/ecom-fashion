<template>
  <v-card>
    <template #prepend>
      <span class="text-h6 font-weight-bold">Size Guide</span>
    </template>
    <template #append>
      <v-btn
        icon="mdi-close"
        variant="text"
        size="large"
        @click="closeDiaglog"
      ></v-btn>
    </template>

    <v-card-text>
      <p class="text-subtitle-1 mb-4">Use the chart below to find your perfect size.</p>
      
      <!-- Size Guide Table -->
      <v-table density="compact" class="rounded-lg">
        <thead>
          <tr>
            <th class="text-left font-weight-bold">Size</th>
            <th class="text-left font-weight-bold">Chest (inches)</th>
            <th class="text-left font-weight-bold">Waist (inches)</th>
            <th class="text-left font-weight-bold">Hip (inches)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-weight-bold">XS</td>
            <td>30-32</td>
            <td>24-26</td>
            <td>32-34</td>
          </tr>
          <tr>
            <td class="font-weight-bold">S</td>
            <td>34-36</td>
            <td>28-30</td>
            <td>36-38</td>
          </tr>
          <tr>
            <td class="font-weight-bold">M</td>
            <td>38-40</td>
            <td>32-34</td>
            <td>40-42</td>
          </tr>
          <tr>
            <td class="font-weight-bold">L</td>
            <td>42-44</td>
            <td>36-38</td>
            <td>44-46</td>
          </tr>
          <tr>
            <td class="font-weight-bold">XL</td>
            <td>46-48</td>
            <td>40-42</td>
            <td>48-50</td>
          </tr>
          <tr>
            <td class="font-weight-bold">XXL</td>
            <td>50-52</td>
            <td>44-46</td>
            <td>52-54</td>
          </tr>
        </tbody>
      </v-table>

      <!-- How to Measure Section -->
      <v-divider class="my-4"></v-divider>
      
      <h4 class="text-h6 font-weight-bold mb-3">How to Measure</h4>
      
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex align-start mb-2">
            <v-icon color="primary" class="mr-2 mt-1">mdi-ruler</v-icon>
            <div>
              <div class="font-weight-bold">Chest</div>
              <div class="text-caption">Measure around the fullest part of your chest, keeping the tape horizontal.</div>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="4">
          <div class="d-flex align-start mb-2">
            <v-icon color="primary" class="mr-2 mt-1">mdi-ruler</v-icon>
            <div>
              <div class="font-weight-bold">Waist</div>
              <div class="text-caption">Measure around your natural waistline, keeping the tape comfortably loose.</div>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="4">
          <div class="d-flex align-start mb-2">
            <v-icon color="primary" class="mr-2 mt-1">mdi-ruler</v-icon>
            <div>
              <div class="font-weight-bold">Hip</div>
              <div class="text-caption">Measure around the fullest part of your hips, about 7-9 inches below your waist.</div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Size Recommendations -->
      <v-divider class="my-4"></v-divider>
      
      <v-alert
        type="info"
        variant="tonal"
        class="mb-3"
      >
        <div class="font-weight-bold">Size Recommendations</div>
        <ul class="mt-2">
          <li>If you're between sizes, we recommend choosing the larger size</li>
          <li>For a looser fit, go up one size</li>
          <li>For a tighter fit, go down one size</li>
          <li>Check the product description for specific fit details</li>
        </ul>
      </v-alert>
      
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
const emit = defineEmits(['close']);
function closeDiaglog() {
  emit('close');
}
</script>