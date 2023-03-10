<template>
  <div class="wrapper wrapper_large">
    <div class="title">Nhật ký</div>
    <NotiNull v-if="logs?.length < 1" />
    <div class="form" v-if="isShowTable">
      <div
        style="align-items: baseline"
        class="inputfield"
        v-for="(log, inx) in logs"
        :key="inx"
      >
        <FieldDiary :log="log" />
      </div>
    </div>

    <ButtonPagination
      :page="page"
      :current_page="current_page"
      :last_page="last_page"
      @update:page="page = $event"
    />
    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { logs } from "@/services/helper";
import { defineComponent } from "vue";
import FieldDiary from "@/components/output/FieldDiary.vue";
import NotiNull from "../NotiNull.vue";
import ButtonPagination from "../../../input/ButtonPagination.vue";
import TheLoading from "../../../TheLoading.vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      sw: false as boolean,
      page: 1 as number,
      current_page: 0 as number,
      last_page: 0 as number,

      isShowTable: true as boolean,
      logs: [
        {
          creator: {},
          content: {},
        },
      ],
    };
  },
  watch: {
    id() {
      this.getDiary();
    },
    page() {
      this.getDiary();
    },
  },
  created() {
    this.getDiary();
  },
  methods: {
    getDiary() {
      this.sw = true;
      logs
        .get({
          append: "creator",
          page: this.page,
          sort: "-updated_at",
          [`filter[logable_id]`]: this.id,
        })
        .then((res) => {
          this.logs = res.data.data;
          this.last_page = res.data.last_page;
          this.current_page = res.data.current_page;
          this.sw = false;
        })
        .catch(() => {
          this.sw = false;
        });
    },
  },
  components: { FieldDiary, NotiNull, ButtonPagination, TheLoading },
});
</script>

<style scoped>
.wrapper {
  margin-top: 50px !important;
  max-width: 100% !important;
  max-height: 800px;
  overflow-y: auto;
}
.date_diary {
  float: right;
}
.tracking_register .wrapper .form .inputfield{
  justify-content: space-between;
}
</style>
