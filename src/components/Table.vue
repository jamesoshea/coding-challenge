<template>
  <div>
    <table class="pure-table challenge__table">
      <thead>
        <tr>
          <th v-text="'#'" />
          <th v-text="'Name'" />
          <th v-text="'Comments'" />
          <th v-text="'Price'" />
          <th v-text="'Tax'" />
          <th v-text="'Total Item'" />
          <th v-text="''" />
        </tr>
      </thead>
      <tbody>
        <TableLine
          v-for="line in lines"
          :key="line.id"
          :basketLine="line"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TableLine from './TableLine.vue';

export default {
  name: 'Table',
  components: {
    TableLine
  },
  computed: {
    ...mapGetters({
      lines: 'basket/allLines',
    })
  }
}
</script>

<style lang="scss" scoped>
.challenge__table {
  margin: auto;
}
</style>
