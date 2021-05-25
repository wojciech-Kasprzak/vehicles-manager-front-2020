<template>
  <q-page class="q-pa-md">
    <FuelingTable
      :elements="fuelings"
      @emittest="deleteFueling($event.item, $event.index)"
    />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="green-7" @click="add = true" />
    </q-page-sticky>

    <AddFueling :milage="car.milage" :open="add" @updatePopup="add = $event" />
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AddFueling from 'components/AddFueling.vue'
import FuelingTable from 'components/FuelingTable.vue'
import { log } from 'app/src-cordova/platforms/ios/platform_www/cordova-js-src/plugin/ios/console'

export default {
  data() {
    return {
      add: false,
    }
  },
  name: 'PageIndex',
  components: { AddFueling, FuelingTable },
  computed: {
    ...mapGetters({
      car: 'car/getCar',
      fuelings: 'fuel/getFuelings',
    }),
  },
  methods: {
    ...mapActions({
      fetchByCarId: 'fuel/fetchByCarId',
      delete: 'fuel/delete',
    }),

    deleteFueling(item, index) {
      this.delete({ item: item, index: index })
    },
    // editFueling(item) {
    //   this.add = true
    //   this.editData = {
    //     price: item.price,
    //     amountFuel: item.amountFuel,
    //     kilometers: item.kilometers,
    //   }
    // },
  },
  created() {
    this.fetchByCarId(this.$route.params.id)
  },
}
</script>
