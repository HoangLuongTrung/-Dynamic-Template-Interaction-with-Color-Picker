<template>
  <div class="flex-row-items">
    <div
      class="related-combination"
      v-for="item of dataSource.colors"
      :key="item.id"
      @click="handleClickCombinationRelated(dataSource)"
    >
      <div :style="{ backgroundColor: item }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Object,
      default: null,
    },
  },

  methods: {
    handleClickCombinationRelated(data) {
      this.$emit('selectRelatedItem', data.id)
    },
  },

  data() {
    return {
      addElement: 5,
    }
  },
}
</script>

<style scoped>
.flex-row-items {
  display: flex;
}

.related-combination {
  width: 25%;
  height: 75px;
  cursor: pointer;
}

.related-combination > div {
  height: 100%;
}
</style>
