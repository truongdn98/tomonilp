<template>
  <div class="address_show">
    <div class="inputfield">
      <label>Tỉnh</label>

      <div class="dropdown" style="width: 100%">
        <input
          class="btn btn-default dropdown-toggle"
          id="dropdownMenu1"
          data-toggle="dropdown"
          style="text-align: left; background: #bdbdbd"
          placeholder=" - Tỉnh -"
          v-model="provinceName"
        />

        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenu1"
          style="width: 100%"
        >
          <li
            v-for="province in getListProvinces"
            :key="province.id"
            @click="handleChooseProvince(province.id, province.name)"
          >
            <a>{{ province.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="inputfield">
      <label>Quận/Huyện</label>
      <div class="dropdown" style="width: 100%">
        <input
          class="btn btn-default dropdown-toggle"
          id="dropdownMenu1"
          data-toggle="dropdown"
          style="text-align: left; background: #bdbdbd"
          placeholder=" - Quận/Huyện -"
          v-model="districtName"
        />

        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenu1"
          style="width: 100%"
        >
          <li
            v-for="district in getListDistricts"
            :key="district.id"
            @click="handleChooseDistrict(district.id, district.name)"
          >
            <a>{{ district.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="inputfield">
      <label>Phường/Xã</label>

      <div class="dropdown" style="width: 100%">
        <input
          class="btn btn-default dropdown-toggle"
          id="dropdownMenu1"
          data-toggle="dropdown"
          style="text-align: left; background: #bdbdbd"
          placeholder=" - Phường/Xã -"
          v-model="wardName"
        />

        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenu1"
          style="width: 100%"
        >
          <li
            v-for="ward in getListWards"
            :key="ward.id"
            @click="handleChooseWard(ward.id, ward.name)"
          >
            <a>{{ ward.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <InputField
      label="Số nhà/mô tả"
      :value="addressDetail"
      type="text"
      @update:value="addressDetail = $event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { provinces, districts, wards } from "@/services/helper";
import InputField from "./InputField.vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
      default: "",
    },

    address: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      search_province: "" as string,
      provinceName: "" as string,
      districtName: "" as string,
      wardName: "" as string,
      addressDetail: "" as string,
      provinces: [
        {
          id: "" as string,
          name: "" as string,
        },
      ],
      provinceId: "",
      districtId: "",
      wardId: "",
      districts: [
        {
          id: "" as string,
          name: "" as string,
        },
      ],
      wards: [
        {
          id: "" as string,
          name: "" as string,
        },
      ],
    };
  },
  watch: {
    wardId(id) {
      this.$emit("update:id", id);
    },
    provinceId() {
      this.getDistricts();
    },
    addressDetail(address) {
      this.$emit("update:address", address);
    },
    address() {
      this.addressDetail = this.address;
    },

    districtId() {
      this.getWards();
    },
  },
  created() {
    this.getProvinces();
  },
  computed: {
    getListProvinces() {
      return this.provinces.filter((item) => {
        return item.name.toLowerCase().match(this.provinceName);
      });
    },

    getListDistricts() {
      return this.districts.filter((item) => {
        return item.name.toLowerCase().match(this.districtName);
      });
    },

    getListWards() {
      return this.wards.filter((item) => {
        return item.name.toLowerCase().match(this.wardName);
      });
    },
  },
  methods: {
    handleChooseProvince(id: string, name: string) {
      this.provinceId = id;
      this.provinceName = name;
    },

    handleChooseDistrict(id: string, name: string) {
      this.districtId = id;
      this.districtName = name;
    },

    handleChooseWard(id: string, name: string) {
      this.wardId = id;
      this.wardName = name;
    },
    getProvinces() {
      provinces.get().then((res) => {
        this.provinces = res.data;
      });
    },
    getDistricts() {
      if (this.provinceId != "") {
        districts
          .get({
            [`filter[province_id]`]: this.provinceId,
          })
          .then((res) => {
            this.districts = res.data;
          });
      }
    },
    getWards() {
      if (this.districtId != "") {
        wards
          .get({
            [`filter[district_id]`]: this.districtId,
          })
          .then((res) => {
            this.wards = res.data;
          });
      }
    },
  },
  components: { InputField },
});
</script>
