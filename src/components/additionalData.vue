<template>
  <div class="container">
    <div class="col1">
      <div class="data">
        <p class="dataName">Apparent temperature</p>
        <p class="dataValue">
          {{
            data.hourly.apparent_temperature[index] +
            " " +
            data.hourly_units.apparent_temperature
          }}
        </p>
      </div>
      <div class="data">
        <p class="dataName">Sealevel pressure</p>
        <p class="dataValue">
          {{
            data.hourly.pressure_msl[index] +
            " " +
            data.hourly_units.pressure_msl
          }}
        </p>
      </div>
      <div class="data">
        <p class="dataName">Cloud cover Total</p>
        <p class="dataValue">
          {{
            data.hourly.cloudcover[index] + " " + data.hourly_units.cloudcover
          }}
        </p>
      </div>
      <div class="data">
        <p class="dataName">Wind direction (10m)</p>
        <p class="dataValue">
          {{
            data.hourly.winddirection_10m[index] +
            " " +
            data.hourly_units.winddirection_10m
          }}
        </p>
      </div>
    </div>
    <div class="col2">
      <div class="data">
        <p class="dataName">Relative humidity (2m)</p>
        <p class="dataValue">
          {{
            data.hourly.relativehumitidy_2m[index] +
            " " +
            data.hourly_units.relativehumitidy_2m
          }}
        </p>
      </div>
      <div class="data">
        <p class="dataName">Wind speed (10 m)</p>
        <p class="dataValue">
          {{
            data.hourly.windspeed_10m[index] +
            " " +
            data.hourly_units.pressure_msl
          }}
        </p>
      </div>
      <div class="data">
        <p class="dataName">Direct solar radiation</p>
        <p class="dataValue">
          {{
            data.hourly.direct_radiation[index] +
            " " +
            data.hourly_units.direct_radiation
          }}
        </p>
      </div>
      <div class="data">
        <p class="dataName">Dewpoint (2 m)</p>
        <p class="dataValue">
          {{
            data.hourly.dewpoint_2m[index] + " " + data.hourly_units.dewpoint_2m
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentTimeIndex } from "./utility/util";
export default {
  data() {
    return {
      index: 0,
    };
  },
  props: ["data"],
  mounted() {
    this.index = getCurrentTimeIndex(this.data);
  },
};
</script>

<style scoped>
.container {
  justify-content: space-around;
}
</style>
