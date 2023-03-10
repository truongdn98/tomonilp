<template>
  <div class="inputfield">
    <label
      >{{ label }}
      <span
        class="fa fa-pencil-square-o"
        v-if="icon"
        @click="isDisable = false"
      ></span
    ></label>

    <input
      :type="type_of"
      :disabled="disabled"
      class="input input_"
      v-model="model"
      min="0"
      :oninput="checkNumber"
    />

    <div v-if="type == 'password'">
      <span
        class="glyphicon glyphicon-eye-open"
        v-if="hidenPass"
        @click="hidenPass = !hidenPass"
      ></span>
      <span
        class="glyphicon glyphicon-eye-close"
        v-else
        @click="hidenPass = !hidenPass"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";

export default defineComponent({
  props: {
    icon: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String,
      required: false,
      default: "",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    checkNumber:{
      type: String,
      required: false,
      default: "",
    }
  },

  // computed: {
  //   checkNumber(){
  //     return "this.value = Math.abs(this.value)";
  //   },
  // },


  data() {
    return {
      model: "" as string,
      isDisable: false as boolean,
      hidenPass: false as boolean,
      type_of: "" as string,
    };
  },
  methods: {
    getDe(value: string) {
      this.$emit("update:value", value);
    },
    setDisable() {
      this.isDisable = this.disabled;
    },
  },
  created() {
    this.setDisable();
    this.type_of = this.type;
  },
  watch: {
    hidenPass() {
      if (this.hidenPass == false) {
        this.type_of = "text";
      }
      if (this.hidenPass == true) {
        this.type_of = "password";
      }
    },

    model: _.debounce(function (this: any, value: string) {
      this.getDe(value);
    }, 200),

    value() {
      this.model = this.value;
    },

    isDisable(disabled) {
      this.$emit("update:disable", disabled);
    },
  },
});
</script>

<style scoped>
span {
  font-size: 25px;
  padding-left: 10px;
  float: right;
  transition: 0.3s;
}

span:hover {
  color: #fca901;
}

.glyphicon {
  font-size: 14px;
  color: #747d8c;
}
</style>
