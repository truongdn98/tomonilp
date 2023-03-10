<template>
  <div>
    <div class="container" style="max-width: 100%">
      <div class="tracking_register">
        <div class="wrapper">
          <div class="title">NHẬT KÝ</div>
          <div class="form">
            <div
              style="
                align-items: baseline;
                border-bottom: 1px solid #fca901;
                padding-bottom: 10px;
                margin: 20px 0px;
              "
              class="inputfield"
              v-for="(log, index) in logs"
              :key="index"
            >
              <FieldDiaryContract :log="log" />
            </div>
          </div>

          <ButtonPagination
            :page="page"
            :current_page="current_page"
            :last_page="last_page"
            @update:page="page = $event"
          />
        </div>
      </div>
    </div>

    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonPagination from "../../input/ButtonPagination.vue";
import TheLoading from "../../TheLoading.vue";
import { logs } from "@/services/helper";
import FieldDiaryContract from "../../output/FieldDiaryContract.vue";

export default defineComponent({
  props: {
    id_contract: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sw: false as boolean,
      page: 1 as number,
      current_page: 0 as number,
      last_page: 0 as number,
      logs: [
        {
          created_at: 0 as number,
          updated_at: 0 as number,
          type_id: "" as string,
          content: [{}],
        },
      ],
    };
  },

  created() {
    this.getDiariesContract();
  },

  watch: {
    id_contract() {
      this.getDiariesContract();
    },
    page() {
      this.getDiariesContract();
    },
  },

  methods: {
    getDiariesContract() {
      logs
        .get({
          append: "creator",
          page: this.page,
          [`filter[logable_id]`]: this.id_contract,
        })
        .then((res) => {
          this.logs = res.data.data;
          this.current_page = res.data.current_page;
          this.last_page = res.data.last_page;
          this.sw = false;
        })
        .catch(() => {
          this.sw = false;
        });
    },
  },
  components: { ButtonPagination, TheLoading, FieldDiaryContract },
});
</script>
<style scoped>
.tracking_register .wrapper {
  max-width: 100%;
}

.container {
  padding-right: 0px;
  padding-left: 0px;
}
</style>
