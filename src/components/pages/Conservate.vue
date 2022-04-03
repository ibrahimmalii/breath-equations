<template>
  <div class="card">
    <div class="card-header bg-primary text-light">
      <h3>CONSERVATIVE THERAPY</h3>
    </div>
    <div class="card-body">
      <div class="mt-4">
        <h4 class="text-success">Duration of cylinder flow (minutes)</h4>
        <div class="airway d-flex">
          <input
            v-model="duration.cylinderFactor"
            type="number"
            placeholder="Cylinder factor"
            class="form-control e-1"
          />
          <input
            v-model="duration.literFlow"
            placeholder="Liter flow"
            type="number"
            class="form-control mx-1"
          />
        </div>
        <span>
          The Result: (pressure in cylinder 500 *
          {{ duration.cylinderFactor || 'Cylinder factor' }}) /
          {{ duration.literFlow || 'Liter flow' }} = {{ measureDuration }}</span
        >
        <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">Liquid Calculation</h4>
        <h6>Duration in minutes</h6>
        <div class="airway d-flex">
          <input
            v-model="liquid[0].capacity"
            type="number"
            placeholder="Liquid Capacity"
            class="form-control e-1"
          />
          <input
            v-model="liquid[0].gauge"
            placeholder="gauge reading"
            type="number"
            class="form-control mx-1"
          />
          <input
            v-model="liquid[0].flow"
            placeholder="Flow"
            type="number"
            class="form-control mx-1"
          />
        </div>
        <span> The Result: {{ measureFirstLiquid }}</span> <br />
        <div class="airway d-flex mt-3">
          <input
            v-model="liquid[1].pounds"
            type="number"
            placeholder="Pounds of liquid"
            class="form-control e-1"
          />
          <input
            v-model="liquid[1].flow"
            placeholder="Flow"
            type="number"
            class="form-control mx-1"
          />
        </div>
        <span> The Result: {{ measureSecondLiquid }}</span> <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: {
        cylinderFactor: null,
        literFlow: null,
      },
      liquid: [
        {
          capacity: null,
          gauge: null,
          flow: null,
        },
        {
          pounds: null,
          flow: null,
        },
      ],
    };
  },
  computed: {
    measureDuration() {
      if (this.duration.cylinderFactor && this.duration.literFlow) {
        return (500 * this.duration.cylinderFactor) / this.duration.literFlow;
      }
      return 0;
    },
    measureFirstLiquid() {
      if (
        this.liquid[0].capacity &&
        this.liquid[0].gauge &&
        this.liquid[0].flow
      ) {
        return (
          (this.liquid[0].capacity * 860 * this.liquid[0].gauge) /
          this.liquid[0].flow
        );
      }
      return 0;
    },
    measureSecondLiquid() {
      if (this.liquid[1].pounds && this.liquid[1].flow) {
        return (this.liquid[1].pounds * 344) / this.liquid[1].flow;
      }
      return 0;
    },
  },
};
</script>

<style></style>
