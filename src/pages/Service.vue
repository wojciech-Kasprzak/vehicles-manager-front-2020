<template>
  <q-page class="q-pa-md">
    <div class="row">
      <q-card
        flat
        bordered
        class="col-xs-12 q-mb-md"
        v-if="!$q.platform.is.mobile"
      >
        <!-- :class="{
          'q-mb-md': $q.platform.is.mobile,
          'q-ma-xs': !$q.platform.is.mobile,
        }" -->
        <q-card-section class="q-ma-none">
          <div class="row items-center">
            <p class="q-ma-none col-xs-12 col-md-3">
              <strong>Przegląd</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-3"><strong>Ważność</strong></p>
            <p class="q-ma-none col-xs-12 col-md-3">
              <strong>Następny</strong>
            </p>
            <!-- <q-separator /> -->
          </div>
        </q-card-section>
      </q-card>
      <q-card
        flat
        bordered
        v-for="(item, index) in servicings"
        :key="item.id"
        class="col-xs-12 q-mb-md"
      >
        <q-card-section class="q-ma-none">
          <div v-if="item.id" class="row items-center">
            <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
              <strong>Przegląd</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-3">{{ item.current }}</p>
            <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
              <strong>Ważność</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-3" v-if="item.valid == 1">
              {{ item.valid }} rok
            </p>
            <p
              class="q-ma-none col-xs-12 col-md-3"
              v-else-if="item.valid < 5 && item.valid > 1"
            >
              {{ item.valid }} lata
            </p>
            <p class="q-ma-none col-xs-12 col-md-3" v-else>
              {{ item.valid }} lat
            </p>
            <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
              <strong>Następny</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-3">
              {{ item.next }}
            </p>
            <q-separator class="q-mt-sm q-mb-md" v-if="$q.platform.is.mobile" />
            <div class="q-ma-none col-md-2">
              <!-- <q-btn
                color="blue-7 q-mr-xs"
                icon="edit"
                v-on:click="editFueling(item)"
              /> -->
              <q-btn
                color="red-7"
                icon="delete"
                v-on:click="deleteFueling(item, index)"
              />
            </div>
          </div>
          <q-skeleton v-else type="rect" />
        </q-card-section>
      </q-card>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="green-7" @click="add = true" />
    </q-page-sticky>

    <AddServicings
      :milage="car.milage"
      :open="add"
      @updatePopup="add = $event"
    />
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AddServicings from 'components/AddServicings.vue'

export default {
  data() {
    return {
      add: false,
    }
  },
  name: 'PageIndex',
  components: { AddServicings },
  computed: {
    ...mapGetters({
      car: 'car/getCar',
      servicings: 'service/getServicings',
    }),
  },
  methods: {
    ...mapActions({
      fetchByCarId: 'service/fetchByCarId',
      delete: 'service/delete',
    }),
    deleteFueling(item, index) {
      this.delete({ item: item, index: index })
    },
    editFueling(item) {
      this.add = true
      this.editData = {
        price: item.price,
        amountFuel: item.amountFuel,
        kilometers: item.kilometers,
      }
    },
  },
  created() {
    this.fetchByCarId(this.$route.params.id)
  },
}
</script>
