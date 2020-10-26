<template>
  <div id="wrap" class="wrap_type_tab">
    <div class="space_wrap">
      <h3>
        전달하실 사진이
        <span class="colPink">{{ list.length }}건</span> 남았어요.
      </h3>
      <div class="deal_list">
        <ul>
          <rev-item
            v-for="(item, index) in list"
            :key="index"
            :id="item.id"
          ></rev-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RevItem from "@C/reservation/RevItem.vue";

export default {
  data() {
    return {
      // Fake Data
      list: [
        {
          date: "2020.06.30",
          item: [1, 2],
          id: 185651,
        },
        {
          date: "2020.07.30",
          item: [1, 2, 3],
          id: 12956,
        },
        {
          date: "2020.08.30",
          item: [1],
          id: 987632,
        },
        {
          date: "2020.09.30",
          item: [1, 2, 3, 4, 5],
          id: 941233,
        },
      ],
    };
  },
  components: {
    RevItem,
  },
};
</script>

<style></style>
