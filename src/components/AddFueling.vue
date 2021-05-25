<template>
  <q-dialog v-model="open" persistent>
    <q-card style="min-width: 320px">
      <q-card-section>
        <div class="text-h6">Dodaj tankowanie</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onCancel">
          <q-input
            ref="price"
            color="green-7"
            v-model="inputs.price"
            label="Cena / L"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
            <template v-slot:prepend>
              <q-icon name="payments" />
            </template>
          </q-input>
          <q-input
            ref="amountFuel"
            color="green-7"
            v-model="inputs.amountFuel"
            label="Ilość litrów"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
            <template v-slot:prepend>
              <q-icon name="local_gas_station" />
            </template>
          </q-input>
          <q-input
            ref="kilometers"
            color="green-7"
            v-model="inputs.kilometers"
            label="Kilometry / bak"
            :rules="[(val) => !!val || 'Pole jest wymagane']"
          >
            <template v-slot:prepend>
              <q-icon name="speed" />
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
        price: null,
        amountFuel: null,
        kilometers: null,
      },
      CarId: parseInt(this.$route.params.id),
    }
  },
  computed: {
    ...mapGetters({
      car: 'car/getCar',
    }),
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
      addFueling: 'fuel/add',
      editFueling: 'fuel/edit',
    }),
    clear() {
      delete this.inputs.CarId
      delete this.inputs.milage

      for (const key in this.inputs) {
        this.inputs[key] = null
        // this.$refs[key].resetValidation()
      }
    },
    onSubmit() {
      let formHasError = []
      for (const key in this.inputs) {
        this.$refs[key].validate()

        // if (this.inputs[key].search('.')) {
        //   this.inputs[key] = parseFloat(this.inputs[key])
        // } else {
        if (this.inputs[key].includes(',')) {
          if (this.inputs[key] != null) {
            this.inputs[key] = parseFloat(this.inputs[key].replaceAll(',', '.'))
          }
        } else {
          this.inputs[key] = parseFloat(this.inputs[key])
        }
        console.log(`val -> ${this.inputs[key]} - key -> ${key}`)
        console.log(typeof this.inputs[key])

        // var number = parseFloat(this.inputs[key])
        // if (isNaN(number) || number % 2 !== 1) {
        //   console.log('Not an odd number!!!')
        //   // this.error = 'wpisz liczbę!'
        //   formHasError.push(false)
        // }
        // else {
        //   this.inputs[key] = this.inputs[key].toString()
        //   console.log(`val -> ${this.inputs[key]} - key -> ${key}`)
        //   console.log(parseFloat(this.inputs[key]))

        //   if (this.inputs[key].includes(',')) {
        //     if (this.inputs[key] != null) {
        //       this.inputs[key] = parseFloat(
        //         this.inputs[key].replaceAll(',', '.')
        //       )
        //     }
        //   }
        // }

        // }

        if (this.$refs[key].hasError) {
          formHasError.push(false)
        } else {
          formHasError.push(true)
        }
      }

      if (!formHasError.includes(false)) {
        this.$emit('updatePopup', false)
        this.inputs.CarId = this.CarId
        this.inputs.milage = this.milage
        // this.addFueling(this.inputs).then((value) => {
        //   console.log(value)
        //   // expected output: "Success!"
        // })
        let data = JSON.parse(JSON.stringify(this.inputs))

        if (!this.edit) {
          this.addFueling(data).then((response) => {
            this.clear()
          })

          this.$q.notify({
            icon: 'done',
            color: 'green-7',
            message: 'Dodano tankowanie',
          })
        } else {
          this.editFueling(data).then((response) => {
            console.log(response)
            this.clear()
          })
          this.$q.notify({
            icon: 'done',
            color: 'green-7',
            message: 'Edytowano tankowanie',
          })
          this.clear()
          this.$emit('clearEdit', null)
          // }
          // this.inputs.price = null
          // this.inputs.amountFuel = null
          // this.inputs.kilometers = null
          // for (const key in this.inputs) {
          //   this.inputs[key] = null
        }
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

