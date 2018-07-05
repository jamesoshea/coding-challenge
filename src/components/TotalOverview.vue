<template>
  <div class="challenge__total-container">
    <table class="pure-table">
      <tbody>
        <tr>
          <td v-text="'Total Brutto'"/>
          <td v-text="getTotal('price')"/>
        </tr>
        <tr>
          <td v-text="'Total Netto'"/>
          <td v-text="getTotal('itemTotal')"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TotalOverview',
  computed: {
    ...mapGetters({
      lines: 'basket/allLines',
    }),
  },
  methods: {
    getTotal(valueName) {
      const total = this.lines.reduce((total, line) => {
        return total + line[valueName];
      }, 0);
      return total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }
  }
};
</script>

<style>
.challenge__total-container {
  direction: rtl;
  margin: 2rem;
}
</style>
