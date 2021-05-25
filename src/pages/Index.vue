<template>
  <q-page class="q-pa-md">
    <div class="row">
      <q-card
        flat
        bordered
        v-for="car in cars"
        :key="car.id"
        class="col-xs-12 col-sm-3"
        :class="{
          'q-mb-md': $q.platform.is.mobile,
          'q-ma-xs': !$q.platform.is.mobile,
        }"
      >
        <!-- class="col-12 col-xs col-sm" -->
        <q-card-section>
          <div v-if="car.id" class="text-caption">
            <p class="text-h6 q-ma-none">
              <strong> {{ car.brand }} {{ car.model }} </strong>
            </p>
          </div>
          <q-skeleton v-else type="rect" />
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div v-if="car.id">
            <div class="row justify-between q-mt-sm q-mb-sm">
              <p class="q-ma-none">Przebieg</p>
              <p class="q-ma-none">
                <strong>{{ car.milage | formatNumber }} km</strong>
              </p>
            </div>
            <q-separator />
            <div class="row justify-between q-mt-sm q-mb-sm">
              <p class="q-ma-none">Średnie spalanie</p>
              <p class="q-ma-none">
                <strong v-if="car.averageFuelConsumption"
                  >{{ car.averageFuelConsumption | formatNumber }} L /
                  100km</strong
                >
                <strong v-else>-</strong>
              </p>
            </div>
            <q-separator />
            <div class="row justify-between q-mt-sm q-mb-sm">
              <p class="q-ma-none">Data rejestracji</p>
              <p class="q-ma-none">
                <strong>{{ car.dateRegistration }}</strong>
              </p>
            </div>
            <div class="row justify-end q-mt-md">
              <q-btn
                :to="'/fuel/' + car.id"
                color="green-7 q-mr-xs"
                icon-right="chevron_right"
                label="Więcej"
              />
              <q-btn color="red-7 " icon="delete" v-on:click="dalete(car.id)" />
            </div>
          </div>
          <q-skeleton v-else type="rect" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  name: 'PageIndex',
  computed: {
    ...mapGetters({
      cars: 'car/getCars',
    }),
  },
  methods: {
    ...mapActions({
      fetchCars: 'car/fetchCars',
      dalete: 'car/dalete',
    }),
  },
  created() {
    // this.$axios.get()
    this.fetchCars()
  },
}
</script>

