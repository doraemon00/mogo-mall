<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button @click.native="checkClick" :is-checked="isSelectAll" class="check-button" />
      <span>全选</span>
    </div>
    <div class="price">合计：{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算 ({{checkLength}})</div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      //1.filter
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      //2.find
      return !this.$store.state.cartList.find(item => !item.checked);
      //3.普通遍历
      // for(let item of this.this.$store.state.cartList){
      //   if(!item.checked){
      //     return false
      //   }
      // }
      // return true
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        //全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show("请选择购买的商品",1500)
      }
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  height: 40px;
  background-color: #eee;
  bottom: 50px;
  line-height: 40px;
  left: 0;
  right: 0;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 30px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>