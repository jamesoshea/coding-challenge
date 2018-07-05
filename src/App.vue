<template>
  <div id="app">
    <Header />
    <Table />
    <Button />
    <TotalOverview />
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import TotalOverview from './components/TotalOverview.vue';

export default {
  name: "app",
  components: {
    Button,
    Header,
    Table,
    TotalOverview
  }
};
</script>
