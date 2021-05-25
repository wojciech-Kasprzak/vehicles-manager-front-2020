<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <q-select
        class="col-xs-12 q-ma-xs col-md-2"
        color="green-7"
        v-model="month"
        :options="getMonths()"
        label="Miesiąc"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
      <q-select
        class="col-xs-12 q-ma-xs col-md-2"
        color="green-7"
        v-model="input.year"
        :options="getYears()"
        label="Rok"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
    </div>
    <p
      class="text-h5 q-ma-none full-width q-mb-sm"
      v-if="!report.Report && (input.month || input.year)"
    >
      <strong>Brak podsumowania</strong>
    </p>
    <p class="text-h5 q-ma-none full-width q-mb-sm" v-if="report.Report">
      <strong>Podsumowanie</strong>
    </p>
    <div class="row q-mb-lg" v-if="report.Report">
      <q-card
        flat
        bordered
        class="col-xs-12 q-mb-md"
        v-if="!$q.platform.is.mobile"
      >
        <q-card-section class="q-ma-none">
          <div class="row items-center">
            <p class="q-ma-none col-xs-12 col-md-1"><strong>Kwota</strong></p>
            <p class="q-ma-none col-xs-12 col-md-1"><strong>Litry</strong></p>
            <p class="q-ma-none col-xs-12 col-md-1">
              <strong>Kilometry</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-2">
              <strong>Spalanie</strong>
            </p>

            <!-- <q-separator /> -->
          </div>
        </q-card-section>
      </q-card>
      <q-card flat bordered class="col-xs-12 q-mb-md">
        <q-card-section class="q-ma-none">
          <div class="row items-center">
            <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
              <strong>Kwota</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-1">
              {{ report.Report.totalPrice | formatNumber }} zł
            </p>
            <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
              <strong>Litry</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-1">
              {{ report.Report.amountFuel | formatNumber }} L
            </p>
            <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
              <strong>Kilometry</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-1">
              {{ report.Report.kilometers | formatNumber }} km
            </p>

            <p class="q-ma-none q-mt-sm col-xs-12" v-if="$q.platform.is.mobile">
              <strong>Spalanie</strong>
            </p>
            <p class="q-ma-none col-xs-12 col-md-2">
              {{ report.Report.averageFuelConsumption | formatNumber }} L / 100
              km
            </p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <p class="text-h5 q-ma-none full-width q-mb-sm" v-if="report.Report">
      <strong>Tankowania</strong>
    </p>
    <FuelingTable
      v-if="report.Report"
      :elements="report.Fuelings"
      :deleteBtn="false"
    />
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FuelingTable from 'components/FuelingTable.vue'

export default {
  components: { FuelingTable },
  data() {
    return {
      month: null,
      input: {
        month: null,
        year: null,
      },
      months: [
        { name: 'Wybierz', num: null },
        { name: 'Styczeń', num: 1 },
        { name: 'Luty', num: 2 },
        { name: 'Marzec', num: 3 },
        { name: 'Kwiecień', num: 4 },
        { name: 'Maj', num: 5 },
        { name: 'Czerwiec', num: 6 },
        { name: 'Lipiec', num: 7 },
        { name: 'Sierpień', num: 8 },
        { name: 'Wrzesień', num: 9 },
        { name: 'Październik', num: 10 },
        { name: 'Listopad', num: 11 },
        { name: 'Grudzień', num: 12 },
      ],
    }
  },
  name: 'Report',
  computed: {
    ...mapGetters({
      car: 'car/getCar',
      report: 'car/getReport',
    }),
  },
  methods: {
    ...mapActions({
      fetchReport: 'car/fetchReport',
    }),

    getMonths() {
      let result = []
      this.months.forEach((elem) => {
        result.push(elem.name)
      })
      return result
    },

    getYears() {
      let year = new Date(this.car.dateRegistration).getFullYear()

      let result = ['Wybierz']
      for (let i = year; i <= new Date().getFullYear(); i++) {
        result.push(i)
      }
      return result
    },
  },
  watch: {
    month: function (val) {
      this.input.month = this.months.find((x) => x.name === val).num
      this.fetchReport({
        id: this.$route.params.id,
        data: { month: this.input.month, year: this.input.year },
      })
    },
    'input.year': function (val) {
      if (val == 'Wybierz') {
        val = null
      }
      this.fetchReport({
        id: this.$route.params.id,
        data: { month: this.input.month, year: val },
      })
    },
  },

  created() {
    // this.fetchReport({id: this.$route.params.id, month: this.input.month, year: this.input.year})
    // this.
  },
}
</script>
