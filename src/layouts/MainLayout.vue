<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green-7">
        <q-toolbar-title> {{ $route.meta.title }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="green-7" @click="popup = true" />
    </q-page-sticky>

    <q-dialog v-model="popup" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Dodaj samochód</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onCancel">
            <q-input
              ref="brand"
              color="green-7"
              v-model="inputs.brand"
              lazy-rules
              label="Marka"
              :rules="[(val) => !!val || 'Pole jest wymagane']"
            >
              <template v-slot:prepend>
                <q-icon name="drive_eta" />
              </template>
            </q-input>
            <q-input
              ref="model"
              color="green-7"
              v-model="inputs.model"
              label="Model"
              :rules="[(val) => !!val || 'Pole jest wymagane']"
            >
              <template v-slot:prepend>
                <q-icon name="drive_eta" />
              </template>
            </q-input>
            <q-input
              ref="milage"
              color="green-7"
              v-model="inputs.milage"
              label="Przebieg"
              :rules="[(val) => !!val || 'Pole jest wymagane']"
            >
              <template v-slot:prepend>
                <q-icon name="speed" />
              </template>
            </q-input>
            <q-input
              ref="date"
              v-model="inputs.dateRegistration"
              color="green-7"
              label="Data rejestracji"
              mask="date"
              :rules="[(val) => !!val || 'Pole jest wymagane', 'date']"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="inputs.dateRegistration" color="green-7">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Zamknij"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <!-- <q-btn label="Submit" type="submit" color="primary" /> -->
            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Anuluj" color="grey-9" type="reset" />
              <q-btn flat label="Dodaj" color="green-7" type="submit" />
            </q-card-actions>
          </form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MainLayout',
  components: {},
  data() {
    return {
      popup: false,
      // date: '',
      inputs: {
        brand: null,
        model: null,
        milage: null,
        dateRegistration: '',
      },
    }
  },
  methods: {
    ...mapActions({
      addCar: 'car/add',
    }),

    onSubmit() {
      let formHasError = []
      for (const key in this.inputs) {
        if (key == 'milage') {
          this.$refs[key].validate()

          if (this.inputs[key].includes(',')) {
            if (this.inputs[key] != null) {
              this.inputs[key] = parseFloat(
                this.inputs[key].replaceAll(',', '.')
              )
            }
          } else {
            this.inputs[key] = parseFloat(this.inputs[key])
          }

          // if (this.inputs[key].includes(',')) {
          //   if (this.inputs[key] != null) {
          //     this.inputs[key] = parseFloat(
          //       this.inputs[key].replaceAll(',', '.')
          //     )
          //   }
          // }

          if (this.$refs[key].hasError) {
            formHasError.push(false)
          } else {
            formHasError.push(true)
          }
        }
      }

      if (!formHasError.includes(false)) {
        this.popup = false
        this.addCar(this.inputs)
        this.$q.notify({
          icon: 'done',
          color: 'green-7',
          message: 'Dodano samochód',
        })
      }
    },
    onCancel() {
      this.popup = false
      for (const key in this.inputs) {
        if (key != 'dateRegistration') {
          this.inputs[key] = null
          this.$refs[key].resetValidation()
        } else {
          this.inputs[key] = ''
        }
      }
    },
  },
}
</script>
