<template>
  <q-item clickable :active="active === title" active-class="my-menu-link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <!-- tag="a"
    :href="link" -->
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  data() {
    return {
      active: 'outbox',
    }
  },
  name: 'EssentialLink----',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: $green
</style>
