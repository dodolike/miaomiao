<template>
<div class="city_body">
    <div class=".city_list">
        <load v-if="isshow"/>
  <scroll v-else ref="hs">
    <div>
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li @tap='handlechange(item.nm,item.id)' v-for="item in hotcity" :key="item.id">{{item.nm}}</li>
        </ul>
      </div>
      <div class="city_sort" ref="hh">
        <div v-for="itemss in allcitys" :key="itemss.index" >
          <h2>{{itemss.index}}</h2>
          <ul>
            <li @tap='handlechange(itemes.nm,itemes.id)' v-for="itemes in itemss.list" :key="itemes.id">{{itemes.nm}}</li>
          </ul>
        </div>
      </div>
      </div>
    </scroll> 
    </div>
    <div class="city_index">
      <ul>
        <li v-for="(items,indexs) in allcitys " :key="items.index" @touchstart="touchlist(indexs)">{{items.index}}</li>
      </ul>
    </div>
 

</div>

</template>

<script>

export default {
  data() {
    return {
      city: [],
      hotcity: [],
      allcitys: [],
      zimu: [],
      isshow:true
    };
  },
  mounted() {
this.isshow = true
    let hotcityss = window.localStorage.getItem("hotcityss");
    let cities = window.localStorage.getItem("cities");
    if (hotcityss && cities) {
      this.hotcity = JSON.parse(hotcityss);
      this.allcitys = JSON.parse(cities);
      this.isshow = false
    } else {
      this.axios({
        methods: "get",
        url: "/api/cityList"
      }).then(res => {
        this.isshow = false
        if (res.data.msg) {
          this.city = res.data.data.cities;
          this.cityformart(this.city);
          //{id: 1, nm: "北京", isHot: 1, py: "beijing"}数据格式
          console.log(this.hotcity, 111);
          window.localStorage.setItem(
            "hotcityss",
            JSON.stringify(this.hotcity)
          );
          window.localStorage.setItem("cities", JSON.stringify(this.allcitys));
        }
      });
    }
  },
  methods: {
    cityformart(data) {
      data.forEach((item, index) => {
        if (item.isHot) {
          this.hotcity.push(item);
          console.log(this.hotcity);
        }
      });
      var allcitys = [];
      for (let i = 0; i < data.length; i++) {
        let firstname = data[i].py.substring(0, 1).toUpperCase();

        if (firstnames(firstname)) {
          allcitys.push({
            index: firstname,
            list: [{ nm: data[i].nm, id: data[i].id }]
          });
        } else {
          for (let j = 0; j < allcitys.length; j++) {
            if (firstname == allcitys[j].index) {
              allcitys[j].list.push({ nm: data[i].nm, id: data[i].id });
            }
          }
        }
      }

      allcitys.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        }
        if (a.index < b.index) {
          return -1;
        }
        if ((a.index = b.index)) {
          return 0;
        }
      });
      function firstnames(datas) {
        for (var i = 0; i < allcitys.length; i++) {
          if (allcitys[i].index === datas) {
            return false;
          }
        }
        return true;
      }

      this.allcitys = allcitys;
      console.log(this.allcitys);
    },
    handlechange(nm,id){
      this.$store.commit('city/CON_CITY',{nm:nm,id:id})
      window.localStorage.setItem('citynm',nm)
      window.localStorage.setItem('cityid',id)
       this.$router.push('/movie/nowplaying');
    },
    touchlist(indexs){
      var h2 = this.$refs.hh.getElementsByTagName('h2')
      this.$refs.hs.toScrollTop (-h2[indexs].offsetTop)
    }


  }
};
</script>

<style scoped lang="scss">
#content .city_body{ margin-top: 85px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:99999px;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul{}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort{}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}

</style>