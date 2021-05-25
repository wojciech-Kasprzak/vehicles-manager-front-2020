<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green-7">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title> {{ $route.meta.title }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8 row justify-center">
          <p class="text-h5 q-ma-none full-width">
            <strong> {{ car.brand }} {{ car.model }} </strong>
          </p>
          <div class="row justify-between q-mt-sm q-mb-sm full-width">
            <p class="q-ma-none">Przebieg</p>
            <p class="q-ma-none">
              <strong>{{ car.milage | formatNumber }} km</strong>
            </p>
          </div>
          <div class="row justify-between q-mt-sm q-mb-sm full-width">
            <p class="q-ma-none">Spalanie</p>
            <p class="q-ma-none">
              <strong v-if="car.averageFuelConsumption"
                >{{ car.averageFuelConsumption | formatNumber }} L /
                100km</strong
              >
              <strong v-else>-</strong>
            </p>
          </div>
          <div class="row justify-between q-mt-sm q-mb-sm full-width">
            <p class="q-ma-none">Data rejestracji</p>
            <p class="q-ma-none">
              <strong>{{ car.dateRegistration }}</strong>
            </p>
          </div>
        </q-item-label>
        <q-item
          v-for="item in links"
          :key="item.title"
          clickable
          :active="item.link === $route.name"
          active-class="active"
          tag="a"
          :href="`#/${item.link}/${$route.params.id}`"
        >
          <q-item-section v-if="item.icon" avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>
              {{ item.caption }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator color="green-7" />
        <q-item-label header class="text-grey-8">
          <q-btn
            to="/"
            color="green-7 q-mr-xs"
            icon="chevron_left"
            label="powrót"
          />
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const linksData = [
  {
    title: 'Tankowania',
    caption: 'Kontroluj spalanie auta',
    icon: 'local_gas_station',
    link: 'fuel',
  },
  {
    title: 'Przeglądy',
    caption: 'Sprawdź odbyte przeglądy',
    icon: 'today',
    link: 'service',
  },
  {
    title: 'Podsumowanie',
    caption: 'Wygeneruj podsumowanie',
    icon: 'history_edu',
    link: 'report',
  },
]

export default {
  name: 'MainLayout',
  data() {
    return {
      active: 'fuel',
      leftDrawerOpen: false,
      links: linksData,
    }
  },
  computed: {
    ...mapGetters({
      car: 'car/getCar',
    }),
  },
  methods: {
    ...mapActions({
      fetchCarById: 'car/fetchCarById',
    }),
  },
  created() {
    this.fetchCarById(this.$route.params.id)
    console.log(this.$route)
  },
}
</script>
<style lang="sass">
.active
  color: white
  background: $green
</style>