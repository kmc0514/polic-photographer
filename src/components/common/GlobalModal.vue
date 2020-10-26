<template>
  <modal-mask v-slot="data">
    <help-modal :helpType="data"></help-modal>
  </modal-mask>
</template>

<script>
import ModalMask from "@C/common/ModalMask.vue";
import HelpModal from "@C/common/HelpModal.vue";

export default {
  components: {
    ModalMask,
    HelpModal,
  },
};
</script>

<style></style>
