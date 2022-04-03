<template>
  <div class="card">
    <div class="card-header bg-primary text-light">
      <h3>OXYGENATION MEASUREMENTS</h3>
    </div>
    <div class="card-body">
      <div class="mt-4">
        <h4 class="text-success">Oxygen Index</h4>
        <div class="airway d-flex">
          <input
            v-model="oxygenIndex.map"
            type="number"
            placeholder="Mean airway pressure (MAP)"
            class="form-control e-1"
          />
          <input
            v-model="oxygenIndex.fio2"
            placeholder="FiO2"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="oxygenIndex.pao"
            type="number"
            placeholder="PaO2"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureIndex }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">CaO<sub>2</sub></h4>
        <div class="airway d-flex">
          <input
            v-model="cao2.sao2"
            type="number"
            placeholder="SaO2"
            class="form-control e-1"
          />
          <input
            v-model="cao2.hb"
            placeholder="Hb"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="cao2.pao2"
            type="number"
            placeholder="PaO2"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureCao2 }}</span> <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oxygenIndex: {
        map: null,
        fio2: null,
        pao: null,
      },
      cao2: {
        sao2: null,
        hb: null,
        pao2: null,
      },
    };
  },
  computed: {
    measureIndex() {
      if (
        this.oxygenIndex.map &&
        this.oxygenIndex.fio2 &&
        this.oxygenIndex.pao
      ) {
        return (
          (this.oxygenIndex.map * this.oxygenIndex.fio2 * 100) /
          this.oxygenIndex.pao
        );
      }
      return 0;
    },
    measureCao2() {
      if (this.cao2.sao2 && this.cao2.hb && this.cao2.pao2) {
        return 1.34 * this.cao2.sao2 * this.cao2.hb + this.cao2.pao2 * 0.003;
      }
      return 0;
    },
  },
};
</script>

<style></style>
