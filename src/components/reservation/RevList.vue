<template>
  <div id="wrap" class="wrap_type_tab">
    <ul class="space_wrap">
      <li v-for="(deal, index) in list" :key="index">
        <h3>{{ deal.date }}</h3>
        <div class="deal_list_type02">
          <ul>
            <rev-item
              v-for="(item, index) in deal.item"
              :key="index"
              :id="deal.id"
            ></rev-item>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import RevItem from "./RevItem.vue";

export default {
  data() {
    return {
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
