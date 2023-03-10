<template>
  <div class="wrapper_notification">
    <div class="notification_title">
      <h4>Thông báo</h4>
      <div class="wrapper_lable_noti">
        <div
          :class="[isGetAll == '1' ? 'label_active' : '', 'label_noti']"
          @click="handleShowAll()"
        >
          <span>Tất cả</span>
        </div>
        <div
          :class="[isGetAll == '2' ? 'label_active' : '', 'label_noti']"
          @click="handleShowUnread()"
        >
          <span>Chưa đọc</span>
        </div>
      </div>
    </div>
    <div class="notification_items">
      <div
        class="notification_item"
        v-for="(noti, index) in notifications"
        :key="index"
        :class="{ notification_item_read: noti.read_at != null }"
      >
        <div>
          <label>{{ noti.data?.title }}</label>
          <span
            :class="[
              noti.read_at != null
                ? ' glyphicon-info-sign active_icon_label'
                : 'glyphicon-info-sign',
              'glyphicon',
            ]"
          ></span>
          <p>{{ noti.data?.body }}</p>
          <span>{{ formatTime(noti.updated_at) }}</span>
          <p
            class="type_noti"
            style="color: rgba(29, 100, 192, 0.916)"
            @click="handleChangeStt(noti.read_at, noti.id)"
          >
            {{ noti.read_at == null ? "Chưa đọc" : "Đã đọc" }}
          </p>
        </div>
      </div>

      <div class="notification_item">
        <ButtonPagination
          :page="page"
          :current_page="current_page"
          :last_page="last_page"
          @update:page="page = $event"
        />
      </div>
    </div>
    <div
      class="notification_title notification_bottom"
      @click="handleReadAll()"
    >
      <h5>đánh dấu tất cả</h5>
    </div>
    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import ButtonPagination from "@/components/input/ButtonPagination.vue";
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import { defineComponent } from "vue";
import _ from "lodash";
import TheLoading from "@/components/TheLoading.vue";
import { notificationStore } from "@/stores/notification";

export default defineComponent({
  mixins: [formatValueMinxin],
  name: "Notification-user",
  props: {
    isShow: {
      type: Boolean,
      requied: true,
      default: false,
    },
  },
  data() {
    return {
      sw: false as boolean,
      isGetAll: "1" as string,
      show: true as boolean,
      page: 1 as number,

      filter_list: {
        unread: "" as string,
      },
    };
  },
  watch: {
    page() {
      this.getNoti();
    },
  },

  computed: {
    notifications() {
      return notificationStore().noti_list;
    },

    current_page() {
      return notificationStore().current_page;
    },

    last_page() {
      return notificationStore().last_page;
    },
  },

  methods: {
    handleShowAll() {
      this.isGetAll = "1";
      this.filter_list.unread = "";
      this.getNoti();
    },
    handleShowUnread() {
      this.isGetAll = "2";
      this.filter_list.unread = "1";
      this.getNoti();
    },
    getNoti() {
      notificationStore().getNotification(this.page, this.filter_list);
    },

    handleReadAll() {
      notificationStore().handleReadAll(this.page, this.filter_list);
    },

    handleChangeStt(stt: number | null, id: string) {
      notificationStore().handleChangeStt(stt, id, this.page, this.filter_list);
    },
  },
  components: { ButtonPagination, TheLoading },
});
</script>
<style scoped>
.glyphicon-info-sign {
  color: #0097e6 !important;
  font-size: 14px !important;
  margin-left: 10px;
}
.active_icon_label {
  color: #718093 !important;
}
</style>
