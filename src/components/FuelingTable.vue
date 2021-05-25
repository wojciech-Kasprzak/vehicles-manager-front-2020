<template>
  <div class="row">
    <q-card
      flat
      bordered
      class="col-xs-12 q-mb-md"
      v-if="!$q.platform.is.mobile"
    >
      <q-card-section class="q-ma-none">
        <div class="row items-center">
          <p class="q-ma-none col-xs-12 col-md-1"><strong>Cena</strong></p>
          <p class="q-ma-none col-xs-12 col-md-1"><strong>Ilość</strong></p>
          <p class="q-ma-none col-xs-12 col-md-2">
            <strong>Kilometry</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-2"><strong>Suma</strong></p>
          <p class="q-ma-none col-xs-12 col-md-2">
            <strong>Spalanie</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-2"><strong>Data</strong></p>
          <p class="q-ma-none col-xs-12 col-md-2"></p>
        </div>
      </q-card-section>
    </q-card>
    <q-card
      flat
      bordered
      v-for="(item, index) in elements"
      :key="item.id"
      class="col-xs-12 q-mb-md"
    >
      <q-card-section class="q-ma-none">
        <div v-if="item.id" class="row items-center">
          <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
            <strong>Cena</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-1">
            {{ item.price | formatNumber }} zł / L
          </p>
          <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
            <strong>Ilość</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-1">
            {{ item.amountFuel | formatNumber }} L
          </p>
          <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
            <strong>Kilometry</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-2">
            {{ item.kilometers | formatNumber }} km / bak
          </p>
          <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
            <strong>Suma</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-2">
            {{ item.totalPrice | formatNumber }} zł
          </p>
          <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
            <strong>Spalanie</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-2">
            {{ item.averageFuelConsumption | formatNumber }} L / 100 km
          </p>
          <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
            <strong>Data</strong>
          </p>
          <p class="q-ma-none col-xs-12 col-md-2">{{ item.date }}</p>
          <q-separator class="q-mt-sm q-mb-md" v-if="$q.platform.is.mobile" />
          <div class="q-ma-none col-md-2" v-if="deleteBtn">
            <!-- <q-btn
                color="blue-7 q-mr-xs"
                icon="edit"
                v-on:click="editFueling(item)"
              /> -->
            <q-btn
              color="red-7"
              icon="delete"
              v-on:click="$emit('emittest', { item: item, index: index })"
            />
          </div>
        </div>
        <q-skeleton v-else type="rect" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    // ccc(item, index) {
    //   this.$emit('emittest', { item: item, index: index })
    // },
  },
  name: 'FuelingTable',
  props: {
    elements: Array,
    deleteBtn: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

