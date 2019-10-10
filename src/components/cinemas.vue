<template>
  <div id="content">
      <load v-if="isshow"></load>
    <scroll v-else class="cinema_body">
      <ul>
        <li v-for="item in list" :key="item.id">
          <div>
            <span>{{item.nm}}</span>
            <span class="q">{{item.sellPrice}}元起</span>
          </div>
          <!-- <div class="price"></div> -->
          <div class="address">
            <span>{{item.addr}}</span>
            <span>{{item.distance}}</span>
          </div>
          <div class="card">
            <div class="bl" v-if="item.vipTag">{{item.vipTag}}</div>
            <div class="bl" v-if="item.allowRefund">{{item.allowRefund}}</div>

            <div class="or" v-if="item.sell">{{item.sell}}</div>
            <div class="or" v-if="item.snack">{{item.snack}}</div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      list: [],
      isshow:true
    };
  },

  activated() {
      this.isshow=true
    Axios({
      url: "/api/cinemaList?cityId=" + this.$store.state.city.cityid
    }).then(res => {
      console.log(res.data.data);
      this.list = res.data.data.cinemas;
      this.isshow = false
      var lists = {
        allowRefund: "改签",
        sell: "退",
        snack: "零食",
        vipTag: "折扣券"
      };
      for (let i = 0; i < this.list.length; i++) {
        for (var prop in lists) {
          if (this.list[i].tag[prop]) {
            console.log(this.list.length);
            console.log(this.list[i], "qqq");
            this.list[i][prop] = lists[prop];
          }
        }
      }
    });
  }
};
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>