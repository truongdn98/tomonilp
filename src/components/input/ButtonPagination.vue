<template>
  <div class="pagination">
    <div class="pagination_btn">
      <button :disabled="isDisableLast" @click="handleClick(1)">
        <i class="fa fa-angle-double-left" aria-hidden="true"></i>
      </button>

      <button v-if="lastBtn" @click="handleClick(current_page - 1)">
        <span>
          {{ current_page - 1 }}
        </span>
      </button>

      <button style="border: 1px solid #fca901">
        <span>
          {{ current_page }}
        </span>
      </button>

      <button @click="handleClick(current_page + 1)" v-if="nextBtn">
        <span>
          {{ current_page + 1 }}
        </span>
      </button>

      <button v-if="nextBtn2" @click="handleClick(current_page + 2)">
        <span>
          {{ current_page + 2 }}
        </span>
      </button>

      <!-- <button>
        <span> ... </span>
      </button> -->

      <button :disabled="isDisableNext" @click="handleClick(last_page)">
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    current_page: {
      type: Number,
      default: 0,
      required: false,
    },

    last_page: {
      type: Number,
      default: 0,
      required: false,
    },

    page: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  data() {
    return {
      isDisableLast: true as boolean,
      isDisableNext: false as boolean,
      lastBtn: false as boolean,
      firstBtn: false as boolean,
      nextBtn: false as boolean,
      nextBtn2: false as boolean,
      pageValue: 0 as number,
    };
  },

  watch: {
    current_page() {
      this.checkPagination();
    },

    pageValue(page) {
      this.$emit("update:page", page);
    },
  },

  methods: {
    handleClick(value: number) {
      this.pageValue = value;
    },

    checkPagination() {
      if (this.current_page != 1) {
        this.isDisableLast = false;
      } else {
        this.isDisableLast = true;
      }
      if (this.last_page > this.current_page) {
        this.isDisableNext = false;
      }
      if (this.last_page == this.current_page) {
        this.isDisableNext = true;
      }
      if (this.current_page > 1) {
        this.lastBtn = true;
      } else {
        this.lastBtn = false;
      }
      if (this.last_page > this.current_page) {
        this.nextBtn = true;
      } else {
        this.nextBtn = false;
        this.nextBtn2 = false;
      }
      if (this.last_page - this.current_page > 1) {
        this.nextBtn2 = true;
      } else {
        this.nextBtn2 = false;
      }
    },

    // checkPagination(){

    // },
  },

  components: {},
});
</script>
