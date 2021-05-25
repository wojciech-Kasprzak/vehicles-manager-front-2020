<template>
  <q-dialog v-model="open" persistent>
    <q-card style="min-width: 320px">
      <q-card-section>
        <div class="text-h6">Dodaj przegląd</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onCancel">
          <q-input
            ref="current"
            v-model="inputs.current"
            color="green-7"
            label="Data przeglądu"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="inputs.current" color="green-7">
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
          <q-input
            ref="valid"
            color="green-7"
            v-model="inputs.valid"
            label="Ważność"
            type="number"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
            <template v-slot:prepend>
              <q-icon name="schedule" />
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      inputs: {
        current: null,
        valid: null,
      },
      CarId: parseInt(this.$route.params.id),
    }
  },
  computed: {
    // ...mapGetters({
    // }),
  },
  name: 'AddFueling',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    milage: {
      type: Number,
      default: 0,
    },
    edit: {
      type: Object,
      // default: false,
    },
  },
  methods: {
    ...mapActions({
      addServicings: 'service/add',
      editServicings: 'service/edit',
    }),

    clear() {
      delete this.inputs.CarId

      for (const key in this.inputs) {
        this.inputs[key] = null
        // this.$refs[key].resetValidation()
      }
    },

    onSubmit() {
      let formHasError = []
      for (const key in this.inputs) {
        this.$refs[key].validate()
        if (key == 'valid') {
          this.inputs[key] = parseInt(this.inputs[key])
        }

        if (this.$refs[key].hasError) {
          formHasError.push(false)
        } else {
          formHasError.push(true)
        }
      }

      if (!formHasError.includes(false)) {
        this.$emit('updatePopup', false)
        this.inputs.CarId = this.CarId
        this.addServicings(this.inputs).then((value) => {
          console.log(value)
          this.clear()
          // expected output: "Success!"
        })
        let data = JSON.parse(JSON.stringify(this.inputs))

        // if (!this.edit) {
        // this.addFueling(data).then((response) => {
        //   this.clear()
        // })

        this.$q.notify({
          icon: 'done',
          color: 'green-7',
          message: 'Przegląd dodano',
        })
        // } else {
        // this.editFueling(data).then((response) => {
        //   console.log(response)
        //   this.clear()
        // })
        // this.$q.notify({
        //   icon: 'done',
        //   color: 'green-7',
        //   message: 'Edytowano tankowanie',
        // })
        // this.clear()
        // this.$emit('clearEdit', null)
        // }
        // this.inputs.price = null
        // this.inputs.amountFuel = null
        // this.inputs.kilometers = null
        // for (const key in this.inputs) {
        //   this.inputs[key] = null
        // }
      }
    },

    onCancel() {
      this.$emit('updatePopup', false)
      console.log(this.edit)
      if (!this.edit) {
        for (const key in this.inputs) {
          if (this.inputs[key] != null) {
            this.inputs[key] = null
            this.$refs[key].resetValidation()
          }
        }
      }
      this.$emit('clearEdit', null)
    },
  },
  watch: {
    edit: function (val) {
      if (val != null) {
        console.log('watch -> ', val)
        this.inputs = val
      }
    },
  },
}
</script>

