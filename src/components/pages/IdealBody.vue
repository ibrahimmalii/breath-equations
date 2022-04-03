<template>
  <div class="card">
    <div class="card-header bg-primary text-light">
      <h3>VENTILATION PARAMETERS</h3>
    </div>
    <div class="card-body">
      <div>
        <h4 class="text-success">Ideal body weight</h4>
        <input
          class="form-control"
          type="number"
          v-model="heightMale"
          placeholder="Height inches for males"
        />
        <span> The Result: {{ measureMaleEauation }}</span> <br />

        <input
          class="form-control mt-3"
          type="number"
          v-model="heightFemale"
          placeholder="Height inches for females"
        />
        <span> The Result: {{ measurefemaleEauation }}</span>
      </div>
      <div class="mt-4">
        <h4 class="text-success">Airway Resistance (R<sub>aw</sub>)</h4>
        <div class="airway d-flex">
          <input
            v-model="airwayResistance.peakPressure"
            type="number"
            placeholder="Peak Pressure"
            class="form-control e-1"
          />
          <input
            v-model="airwayResistance.plateauPressure"
            placeholder="Plateau Pressure "
            type="number"
            class="form-control mx-1"
          /><input
            v-model="airwayResistance.flowrate"
            type="number"
            placeholder="Flowrate ni L/min"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureAirWayResistance }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">Static Compliance</h4>
        <div class="airway d-flex">
          <input
            v-model="staticCompliance.tidalVolume"
            type="number"
            placeholder="Tidal Volume"
            class="form-control me-1"
          />
          <input
            v-model="staticCompliance.plateauPressure"
            placeholder="Plateau Pressure"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="staticCompliance.totalPeep"
            type="number"
            placeholder="Total Peep"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureStaticCompliance }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">Dynamic Compliance</h4>
        <div class="airway d-flex">
          <input
            v-model="dynamicCompliance.tidalVolume"
            type="number"
            placeholder="Tidal Volume"
            class="form-control me-1"
          />
          <input
            v-model="dynamicCompliance.peakPressure"
            placeholder="Peak Pressure"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="dynamicCompliance.totalPeep"
            type="number"
            placeholder="Total Peep"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureDynamicCompliance }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">Total Cycle time (TCT)</h4>
        <div class="d-flex">
          <input
            v-model="totalCycleTime.frequency"
            type="number"
            placeholder="f (frequency)"
            class="form-control"
          />
        </div>
        <span> The Result: {{ measureTotalCycleTime }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">Inspiratory Time (T<sub>l</sub>)</h4>
        <div class="d-flex">
          <input
            v-model="inspiratoryTime.tct"
            type="number"
            placeholder="Total Cycle time (TCT)"
            class="form-control"
          />
          <input
            v-model="inspiratoryTime.sumOfIE"
            type="number"
            placeholder="Sum of I:E ratio"
            class="form-control ms-2"
          />
        </div>
        <span> The Result: {{ measureInspiratoryTime }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">Expiratory Time (T<sub>E</sub>)</h4>
        <div class="d-flex">
          <input
            v-model="expiratoryTime.tct"
            type="number"
            placeholder="Total Cycle time (TCT)"
            class="form-control"
          />
          <input
            v-model="expiratoryTime.insertTI"
            type="number"
            placeholder="insert TI "
            class="form-control ms-2"
          />
        </div>
        <span> The Result: {{ measureExpiratoryTime }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">
          Desired Change (f, V<sub>t</sub>, V<sub>E</sub>)
        </h4>
        <div class="airway mt-3 d-flex">
          <input
            v-model="desiredChange[0].rate"
            type="number"
            placeholder="Rate (current setting)"
            class="form-control e-1"
          />
          <input
            v-model="desiredChange[0].currentValue"
            placeholder="PaCO2 (current value)"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="desiredChange[0].desiredValue"
            type="number"
            placeholder="PaCO2 (desired value)"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureFirstDesiredChange }}</span> <br />
        <div class="airway mt-3 d-flex">
          <input
            v-model="desiredChange[1].currentSetting"
            type="number"
            placeholder="VT (current setting)"
            class="form-control e-1"
          />
          <input
            v-model="desiredChange[1].currentLevel"
            placeholder="PaCO2 (current level)"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="desiredChange[1].currentValue"
            type="number"
            placeholder="PaCO2 (desired value)"
            class="form-control ms-1"
          />
        </div>
        <span class="mb-2"> The Result: {{ measureSecondDesiredChange }}</span>
        <br />
        <div class="airway mt-3 d-flex">
          <input
            v-model="desiredChange[2].currentLevelVE"
            type="number"
            placeholder="VE (current level)"
            class="form-control e-1"
          />
          <input
            v-model="desiredChange[2].currentLevelPA"
            placeholder="PaCO2 (current level)"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="desiredChange[2].desiredValue"
            type="number"
            placeholder="PaCO2 (desired value)"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureThirdDesiredChange }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">Desired FiO<sub>2</sub> level</h4>
        <div class="airway d-flex">
          <input
            v-model="desiredFILevel.desiredValue"
            type="number"
            placeholder="PaO2 (desired value)"
            class="form-control me-1"
          />
          <input
            v-model="desiredFILevel.currentValueFi"
            placeholder="FiO2 (current value)"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="desiredFILevel.currentValuePa"
            type="number"
            placeholder="PaO2 (current value)"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureDesiredFiLevel }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">
          Rapid/Shallow Breathing Index (f/V<sub>t</sub>)
        </h4>
        <div class="d-flex">
          <input
            v-model="rapidAndShallow.frequency"
            type="number"
            placeholder="f (frequency)"
            class="form-control"
          />
          <input
            v-model="rapidAndShallow.liters"
            type="number"
            placeholder="Vt (liters)"
            class="form-control ms-2"
          />
        </div>
        <span> The Result: {{ measureRapidAndShallow }}</span> <br />
      </div>
      <div class="mt-4">
        <h4 class="text-success">ROX index</h4>
        <div class="airway d-flex">
          <input
            type="number"
            v-model="roxIndex.spo2"
            placeholder="SPO2"
            class="form-control me-1"
          />
          <input
            v-model="roxIndex.fio2"
            placeholder="FIO2"
            type="number"
            class="form-control mx-1"
          /><input
            v-model="roxIndex.rate"
            type="number"
            placeholder="Respiratory Rate"
            class="form-control ms-1"
          />
        </div>
        <span> The Result: {{ measureRoxIndex }}</span> <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightMale: null,
      heightFemale: null,
      airwayResistance: {
        peakPressure: null,
        plateauPressure: null,
        flowrate: null,
      },
      staticCompliance: {
        tidalVolume: null,
        plateauPressure: null,
        totalPeep: null,
      },
      dynamicCompliance: {
        tidalVolume: null,
        peakPressure: null,
        totalPeep: null,
      },
      totalCycleTime: {
        frequency: null,
      },
      inspiratoryTime: {
        tct: null,
        sumOfIE: null,
      },
      expiratoryTime: {
        tct: null,
        insertTI: null,
      },
      desiredChange: [
        {
          rate: null,
          currentValue: null,
          desiredValue: null,
        },
        {
          currentSetting: null,
          currentLevel: null,
          desiredValue: null,
        },
        {
          currentLevelVE: null,
          currentLevelPA: null,
          desiredValue: null,
        },
      ],
      desiredFILevel: {
        desiredValue: null,
        currentValueFi: null,
        currentValuePa: null,
      },
      rapidAndShallow: {
        frequency: null,
        liters: null,
      },
      roxIndex: {
        spo2: null,
        fio2: null,
        rate: null,
      },
    };
  },
  computed: {
    measureMaleEauation() {
      if (this.heightMale) {
        return (this.heightMale - 60) * 6 + 106;
      }
      return 0;
    },
    measurefemaleEauation() {
      if (this.heightFemale) {
        return (this.heightFemale - 60) * 5 + 105;
      }
      return 0;
    },
    measureAirWayResistance() {
      if (
        this.airwayResistance.peakPressure &&
        this.airwayResistance.plateauPressure &&
        this.airwayResistance.flowrate
      ) {
        return (
          ((this.airwayResistance.peakPressure -
            this.airwayResistance.plateauPressure) /
            this.airwayResistance.flowrate) *
          60
        );
      }

      return 0;
    },
    measureStaticCompliance() {
      if (
        this.staticCompliance.tidalVolume &&
        this.staticCompliance.plateauPressure &&
        this.staticCompliance.totalPeep
      ) {
        return (
          this.staticCompliance.tidalVolume /
          (this.staticCompliance.plateauPressure -
            this.staticCompliance.totalPeep)
        );
      }

      return 0;
    },
    measureDynamicCompliance() {
      if (
        this.dynamicCompliance.tidalVolume &&
        this.dynamicCompliance.peakPressure &&
        this.dynamicCompliance.totalPeep
      ) {
        return (
          this.dynamicCompliance.tidalVolume /
          (this.dynamicCompliance.peakPressure -
            this.dynamicCompliance.totalPeep)
        );
      }

      return 0;
    },
    measureTotalCycleTime() {
      if (this.totalCycleTime.frequency) {
        return 60 / this.totalCycleTime.frequency;
      }
      return 0;
    },
    measureInspiratoryTime() {
      if (this.inspiratoryTime.tct && this.inspiratoryTime.sumOfIE) {
        return this.inspiratoryTime.tct / this.inspiratoryTime.sumOfIE;
      }
      return 0;
    },
    measureExpiratoryTime() {
      if (this.expiratoryTime.tct && this.expiratoryTime.insertTI) {
        return this.expiratoryTime.tct - this.expiratoryTime.insertTI;
      }
      return 0;
    },
    measureFirstDesiredChange() {
      if (
        this.desiredChange[0].rate &&
        this.desiredChange[0].currentValue &&
        this.desiredChange[0].desiredValue
      ) {
        return (
          (this.desiredChange[0].rate * this.desiredChange[0].currentValue) /
          this.desiredChange[0].desiredValue
        );
      }
      return 0;
    },
    measureSecondDesiredChange() {
      if (
        this.desiredChange[1].currentSetting &&
        this.desiredChange[1].currentLevel &&
        this.desiredChange[1].currentValue
      ) {
        return (
          (this.desiredChange[1].currentSetting *
            this.desiredChange[1].currentLevel) /
          this.desiredChange[1].currentValue
        );
      }
      return 0;
    },
    measureThirdDesiredChange() {
      if (
        this.desiredChange[2].currentLevelVE &&
        this.desiredChange[2].currentLevelPA &&
        this.desiredChange[2].desiredValue
      ) {
        return (
          (this.desiredChange[2].currentLevelVE *
            this.desiredChange[2].currentLevelPA) /
          this.desiredChange[2].desiredValue
        );
      }
      return 0;
    },
    measureDesiredFiLevel() {
      if (
        this.desiredFILevel.desiredValue &&
        this.desiredFILevel.currentValueFi &&
        this.desiredFILevel.currentValuePa
      ) {
        return (
          (this.desiredFILevel.desiredValue *
            this.desiredFILevel.currentValueFi) /
          this.desiredFILevel.currentValuePa
        );
      }
      return 0;
    },
    measureRapidAndShallow() {
      if (this.rapidAndShallow.frequency && this.rapidAndShallow.liters) {
        return this.rapidAndShallow.frequency / this.rapidAndShallow.liters;
      }
      return 0;
    },
    measureRoxIndex() {
      if (this.roxIndex.fio2 && this.roxIndex.spo2 && this.roxIndex.rate) {
        return this.roxIndex.spo2 / this.roxIndex.fio2 / this.roxIndex.rate;
      }
      return 0;
    },
  },
};
</script>

<style>
.card-body {
  background-color: lightgray;
}
</style>
