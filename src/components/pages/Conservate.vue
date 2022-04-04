<template>
  <div class="card">
    <div class="card-header bg-secondary text-light">
      <h3>CONSERVATIVE THERAPY</h3>
    </div>

    <div class="card-body">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Duration of cylinder flow (minutes)
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div>
                <div class="airway d-flex">
                  <input
                    v-model="duration.pressureInCylinder"
                    type="number"
                    placeholder="Pressure in cylinder"
                    class="form-control e-1"
                  />
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
                <span> The Result: {{ measureDuration }}</span>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Liquid Calculation
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: {
        pressureInCylinder: null,
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
      if (
        this.duration.pressureInCylinder &&
        this.duration.cylinderFactor &&
        this.duration.literFlow
      ) {
        return (
          (this.duration.pressureInCylinder * this.duration.cylinderFactor) /
          this.duration.literFlow
        );
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

<style scoped>
.accordion-header {
  background-color: red;
}
</style>
