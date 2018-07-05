<template>
  <tr data-test="challenge-table-row">
    <td v-text="basketLine.id" />
    <td v-text="basketLine.name" />
    <td v-text="basketLine.comments" />
    <td v-text="priceRepresentation" />
    <td v-text="basketLine.taxRate" />
    <td v-text="totalRepresentation" />
    <td
      class="challenge__delete-button"
      v-text="'X'"
      @click="deleteLine(basketLine.id)"
    />
  </tr>
</template>

<script>
export default {
  name: 'TableLine',
  props: {
    basketLine: {
      type: Object,
      required: true,
    },
  },
  computed: {
    priceRepresentation() {
      return this.basketLine.price.toLocaleString('de-DE', 
        { 
          style: 'currency',
          currency: 'EUR'
        }
      );
    },
    totalRepresentation() {
      return this.basketLine.itemTotal.toLocaleString('de-DE', 
        { 
          style: 'currency',
          currency: 'EUR'
        }
      );
    }
  },
  methods: {
    deleteLine(id) {
      this.$store.dispatch('basket/deleteLine', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.challenge__delete-button {
  color: red;
  cursor: pointer;
}
</style>
