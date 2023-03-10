<template>
  <div class="container">
    <div class="wrap">
      <div style="padding-bottom: 30px; display: flex">
        <h3 class="section-title" id="title_order">DANH SÁCH ĐƠN HÀNG</h3>
      </div>

      <div class="filter_group">
        <div class="filter_icon">
          <span class="glyphicon glyphicon-filter"></span>
        </div>

        <div class="filter_calendar">
          <button
            class="btn btn-default"
            @click="showCalendar = !showCalendar"
            style="background: #fff"
          >
            Thời gian
          </button>

          <InputDateField
            v-if="showCalendar"
            :filter_date="dates"
            @update:filter_date="dates = $event"
          />
        </div>

        <div class="dropdown">
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
          >
            {{ filterName_type == "" ? "Trạng thái" : filterName_type }}
            <span class="caret"></span>
          </button>
          <ul
            class="dropdown-menu"
            aria-labelledby="dropdownMenu1"
            style="width: 100%"
          >
            <li @click="handleFilterType('', '')">
              <a>Tất cả</a>
            </li>
            <li
              v-for="(item, index) in status_list"
              :key="index"
              @click="handleFilterType(item.id, item.name)"
            >
              <a>{{ item.name }}</a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
          >
            {{ filterName_method == "" ? "Vận chuyển" : filterName_method }}
            <span class="caret"></span>
          </button>
          <ul
            class="dropdown-menu"
            aria-labelledby="dropdownMenu1"
            style="width: 100%"
          >
            <li @click="handleFilterMethod('', 'Tất cả')">
              <a>Tất cả</a>
            </li>
            <li @click="handleFilterMethod('air', 'Đường hàng không')">
              <a>Đường hàng không</a>
            </li>
            <li @click="handleFilterMethod('sea', 'Đường biển')">
              <a>Đường biển</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="filter_label_wrap">
        <div class="filter_label" v-show="filterName_method != ''">
          <span class="label label-default">
            {{ filterName_method }}
            <span class="btn_close_label" @click="handleCloseLabelMathod()"
              >x</span
            ></span
          >
        </div>

        <div class="filter_label" v-show="filterName_type != ''">
          <span class="label label-primary"
            >{{ filterName_type }}
            <span class="btn_close_label" @click="handleCloseLabelType()"
              >x</span
            ></span
          >
        </div>

        <div class="filter_label" v-show="dates.end != 0">
          <span class="label label-success"
            >Thời gian
            <span class="btn_close_label" @click="handleCloseLabelTime()"
              >x</span
            ></span
          >
        </div>
      </div>

      <div class="table_wrapper">
        <table class="table table-striped">
          <thead>
            <tr>
              <th><span class="glyphicon glyphicon-tasks"></span></th>
              <th>STT</th>
              <th class="thth">Trạng thái</th>
              <th class="thth">Tracking</th>
              <th class="thth">Mã đơn</th>
              <th class="thth ththz">Phương thức vận chuyển</th>
              <th class="thth ththz">Địa chỉ</th>
              <th class="thth">Ghi chú</th>
              <th class="thth ththz">Ngày cập nhật</th>
            </tr>
          </thead>

          <tbody>
            <tr
              id="itemAd"
              v-for="(order, inx) in order_list"
              :key="inx"
              @dblclick="handleShowTable(order.id)"
            >
              <td>
                <div class="wrapper_icon" @click="handleShowTable(order.id)">
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  <div class="content_noti"><span>Xem chi tiết</span></div>
                </div>
              </td>
              <td>{{ inx + 1 }}</td>
              <td>
                <div class="sttT">
                  <span
                    :class="[
                      order.status.name == 'Chờ duyệt'
                        ? 'label-primary'
                        : order.status.name == 'Đã ghi nợ'
                        ? 'label-warning'
                        : order.status.name == 'Đã xong'
                        ? 'label-success'
                        : order.status.name == 'Đã hủy'
                        ? 'label-danger'
                        : order.status.name == 'Đã hết hàng'
                        ? 'label-orgin'
                        : order.status.name == 'Đã thanh toán cho nhà cung cấp'
                        ? 'label-blue'
                        : order.status.name == 'Đã mua hàng'
                        ? 'label-info'
                        : order.status.name == 'Đã báo giá'
                        ? 'label-violet'
                        : 'label-orgin',
                      'label',
                    ]"
                    >{{ order.status.name }}</span
                  >
                </div>
              </td>
              <td>
                {{
                  order.trackings.length
                    ? order.trackings[0].code
                    : "Không có mã Tracking"
                }}
              </td>
              <td>{{ order.id }}</td>
              <td>
                {{
                  order.shipment_method_id == "air"
                    ? "Đường hàng không"
                    : "Đường biển"
                }}
              </td>

              <td>{{ order.shipment_info.full_address }}</td>
              <td>{{ order.note }}</td>
              <td>{{ formatTime(order.updated_at) }}</td>
            </tr>
          </tbody>
        </table>

        <ButtonPagination
          :page="page"
          :current_page="current_page"
          :last_page="last_page"
          @update:page="page = $event"
        />
      </div>
    </div>

    <div class="border border_long" style="background-color: #dfe4ea"></div>

    <section class="tracking_register" v-if="isShowTable == true">
      <div class="wrap_auth" id="order_detail">
        <TheOrderDetail :id="id" />
      </div>
    </section>
    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import { order_shipment } from "@/services/order";
import { defineComponent } from "vue";
import TheOrderDetail from "./TheOrderDetail.vue";
import TheLoading from "@/components/TheLoading.vue";
import ButtonPagination from "../../input/ButtonPagination.vue";
import _ from "lodash";

import InputDateField from "@/components/input/InputDateField.vue";

export default defineComponent({
  mixins: [formatValueMinxin],
  data() {
    return {
      events: [],
      showCalendar: false,

      dates: {
        start: 0 as any,
        end: 0 as any,
      },
      filter_time_between: {
        updated_at: "" as string,
      },
      filterName_type: "" as string,
      filterName_method: "" as string,
      sw: false as boolean,
      id_order: "" as any,
      search_stt: "" as string,
      isShowTable: false as boolean,
      id: "" as string,
      current_page: 0 as number,
      last_page: 0 as number,
      page: 1 as number,
      filter_list: {
        status_id: "" as string,
        tracking_by_code: "" as string,
        shipment_method_id: "" as string,
      },
      status_list: [{ id: "" as string, name: "" as string }],
      order_list: [
        {
          note: "" as string,
          id: "" as string,
          shipment_method_id: "" as string,
          shipment_info: {
            address: "" as string,
            consignee: "" as string,
            full_address: "" as string,
            note: "" as string,
            sender_name: "" as string,
            sender_tel: "" as string,
            tel: "" as string,
          },
          created_at: 0 as string | number,
          updated_at: 0 as number,
          status: {
            id: "" as string,
            name: "" as string,
          },
          trackings: [
            {
              code: "" as string,
              id: "" as string,
            },
          ],
        },
      ],

      shipment: {},
    };
  },

  watch: {
    id() {
      this.isShowTable = true;
    },
    page() {
      this.getOrderList();
    },

    dates() {
      this.handleFilterTime(this.getTime);
    },
  },

  created() {
    this.getOrderList();
    this.checkChangePage();
    this.getStatus();
  },

  computed: {
    getTime() {
      return `${this.toTimeStamp(this.dates.start, "")},${this.toTimeStamp(
        this.dates.end,
        ""
      )}`;
    },
  },
  methods: {
    handleCloseLabelTime() {
      this.dates.start = 0;
      this.dates.end = 0;
      this.filter_time_between.updated_at = "";
      this.getOrderList();
    },

    handleCloseLabelMathod() {
      this.filter_list.shipment_method_id = "";
      this.filterName_method = "";
      this.getOrderList();
    },

    handleCloseLabelType() {
      this.filter_list.status_id = "";
      this.filterName_type = "";
      this.getOrderList();
    },
    handleFilterType(value: string, name: string) {
      this.filter_list.status_id = value;
      this.filterName_type = name;
      this.getOrderList();
    },

    handleFilterMethod(value: string, name: string) {
      this.filter_list.shipment_method_id = value;
      this.filterName_method = name;
      this.getOrderList();
    },

    handleFilterTime(value: string) {
      this.filter_time_between.updated_at = value;
      this.getOrderList();
    },

    getStatus() {
      order_shipment.get_detail("statuses", {}).then((res) => {
        this.status_list = res.data;
      });
    },

    scrollTo() {
      // const element: any = document.getElementById("order_detail");
      // element.scrollIntoView(false);
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    },

    checkChangePage() {
      if (this.$route.params?.id) {
        this.id_order = this.$route.params.id;
        this.id = this.id_order;
        this.scrollTo();
      }
    },

    handleShowTable(value: string) {
      this.$router.push({ path: `/auth/orders/${value}` });
      this.id = value;
      this.scrollTo();
    },

    getOrderList() {
      const filterList = _.mapKeys(this.filter_list, function (value, key) {
        return `filter[${key}]`;
      });
      const filterFields = _.pickBy(filterList);

      const filterList2 = _.mapKeys(
        this.filter_time_between,
        function (value, key) {
          return `filter_between[${key}]`;
        }
      );
      const filterFields2 = _.pickBy(filterList2);

      console.log(filterFields);
      this.sw = true;
      order_shipment
        .get_all({
          [`filter[own]`]: 1,
          include: "trackings,status,shipmentInfo",
          page: this.page,
          sort: "-updated_at",
          ...filterFields,
          ...filterFields2,
        })
        .then((res) => {
          this.order_list = res.data.data;
          this.current_page = res.data.current_page;
          this.last_page = res.data.last_page;
          this.sw = false;
          this.showCalendar = false;
        })
        .catch(() => {
          this.sw = false;
          this.showCalendar = false;
        });
    },
  },
  components: {
    TheOrderDetail,
    TheLoading,
    ButtonPagination,

    InputDateField,
  },
});
</script>

<style scoped>
.wrapper_icon {
  position: relative;
}

.wrapper_icon:hover .fa-angle-double-right {
  color: #fca901;
}
.fa-angle-double-right {
  font-size: 20px;
  color: #0006c19c;
}

.wrapper_icon:hover .content_noti {
  opacity: 1;
}
.content_noti {
  position: absolute;
  top: -30px;
  left: 20px;
  height: 30px;
  width: 100px;
  background: #333;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 5px;
  opacity: 0;
}
.dropdown {
  display: inline;
  float: left;
  margin-right: 30px;
  margin-bottom: 20px;
}

.input_status {
  background: #fff;
}

.label-blue {
  background-color: #97ffff;
}
.label-violet {
  background-color: #8470ff;
}
.label-orgin {
  background-color: #ff8247;
}

.wrapper p {
  cursor: pointer;
  color: #fca901;
  float: right;
}
.glyphicon {
  color: #696969;
}

.border_show {
  text-align: center;
  margin: 50px auto;
}

.icon {
  padding-left: 20px;
}

th {
  font-weight: 500;
  font-family: "Roboto", "Arial Narrow", Arial, sans-serif;
  border-left: 1px solid #e8e8e8;
}

.func {
  display: flex;
}

.container {
  position: relative;
  padding-bottom: 100px;
}

#itemAd:hover {
  color: black;
}

.section-title {
  padding: 0px 0px 20px 20px;
  color: #57606f;
  font-weight: 500;
  font-size: 28px;
}
</style>
