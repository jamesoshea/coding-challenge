<template>
  <tr>
    <td v-text="basketLine.id" />
    <td v-text="basketLine.name" />
    <td v-text="basketLine.comments" />
    <td v-text="basketLine.price" />
    <td v-text="basketLine.taxRate" />
    <td v-text="basketLine.itemTotal" />
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
