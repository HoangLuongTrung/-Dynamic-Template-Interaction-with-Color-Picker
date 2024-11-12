<template>
  <div class="combination-detail">
    <div class="avatar">
      <div class="reaction">
        <img class="heart" :src="getCurrentReaction(dataSource.combination.liked)" />
        <span>{{ dataSource.combination.likes }}</span>
      </div>
      <img class="combination" :src="currentImage(dataSource.combination.featuredImage.url)" />
    </div>
    <div class="flex-items">
      <div
        class="colors"
        v-for="data in dataSource?.combination?.colors"
        :key="data.id"
        @click="onSelectColor(data)"
      >
        <div class="detail" :style="{ backgroundColor: data.hex }"></div>
        <div class="content">
          <div class="name">
            {{ data?.name }}
          </div>
          <div class="hex">
            {{ data?.hex?.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
    <div class="related-combination">
      <h1>Related Combinations</h1>
      <div id="combination-item" class="flex-row">
        <div v-for="(item, index) in getCombinationList" :key="index">
          <related-combination-item
            v-bind:data-source="item"
            @selectRelatedItem="onSelectCombinationRelated($event)"
          ></related-combination-item>
        </div>
        <button class="add-more-button" @click="addMoreCombinations">See more combinations</button>
      </div>
    </div>

    <div class="combination-note">
      <p>Use this color palette and create beautiful designs and documents</p>
      <button>Browse templates</button>
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
  data() {
    return {
      addElement: 5,
    }
  },

  computed: {
    getCombinationList() {
      return this.dataSource.relatedCombinations.slice(0, this.addElement)
    },
  },

  methods: {
    addMoreCombinations() {
      this.addElement += 5
    },

    onSelectColor(data) {
      this.$emit('select', data)
    },

    onSelectCombinationRelated(data) {
      this.$emit('selectRelated', data)
    },

    currentImage(imagePath) {
      return new URL(`../assets/images/${imagePath}`, import.meta.url).href
    },

    getCurrentReaction(isLiked) {
      return new URL(
        `../assets/images/${isLiked ? 'heart-red' : 'heart-white'}.png`,
        import.meta.url,
      ).href
    },
  },
}
</script>

<style scoped>
.combination-detail {
  position: absolute;
  left: calc(50% - 300px);
  top: 100px;
  width: 600px;
}

.combination-detail .avatar {
  display: flex;
  position: relative;
}

.combination-detail .avatar .reaction {
  position: absolute;
  right: 20px;
  top: 10px;
  align-items: center;
  display: flex;
  border-radius: 10px;
  padding: 4px 10px;
  background-color: rgb(254 254 254);
}

.combination-detail .avatar .reaction .heart {
  width: 30px;
  height: 30px;
  margin-right: 4px;
}

.combination-detail .avatar .combination {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.combination-detail .flex-items {
  display: flex;
  flex-direction: row;
  min-height: 180px;
}

.combination-detail .colors {
  width: 25%;
  height: 100px;
}

.combination-detail .colors:first-child .detail {
  border-bottom-left-radius: 8px;
}

.combination-detail .colors:last-child .detail {
  border-bottom-right-radius: 8px;
}

.combination-detail .colors .detail {
  height: 100%;
}

.combination-detail .colors .content {
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
}

.combination-detail .colors .content .name {
  font-weight: 500;
  text-decoration: underline;
}

.combination-detail .colors .content .hex {
  color: gray;
}

.combination-detail .related-combination .flex-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.combination-detail .related-combination h1 {
  text-align: center;
  margin: 24px;
  font-weight: bold;
}

.combination-detail .related-combination .flex-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.combination-detail .related-combination .flex-row > div,
.combination-detail .related-combination .add-more-button {
  width: calc(50% - 10px);
}
.combination-detail .related-combination .add-more-button {
  height: 75px;
  color: black;
  font-weight: 400;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: none;
}

.combination-detail .combination-note {
  text-align: center;
  margin: 56px 0 32px 0;
  font-size: 28px;
}

.combination-detail .combination-note p {
  font-weight: bold;
}

.combination-detail .combination-note button {
  background-color: #f4b9b8;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  outline: none;
  font-weight: 600;
  width: 150px;
}
</style>
