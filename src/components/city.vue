<template>
<div>
 <h2>热门城市</h2> 
 <ul>
     <router-view tag="li" v-for="item in hotcity" :key="item.id">
{{item.nm}}
     </router-view>
     </ul>  
</div>




</template>

<script>
export default {
  data() {
    return {
      city: [],
      hotcity: [],
      allcitys: [],
      zimu: []
    };
  },
  mounted() {
    this.axios({
      methods: "get",
      url: "/api/cityList"
    }).then(res => {
      if (res.data.msg) {
        this.city = res.data.data.cities;
        this.cityformart(this.city);
        //{id: 1, nm: "北京", isHot: 1, py: "beijing"}数据格式
        console.log(this.hotcity);
      }
    });
  },
  methods: {
    cityformart(data) {
      data.forEach(( item,index) => {
        if (item.isHot) {
          this.hotcity.push(item);
          console.log(this.hotcity)
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
          if ( allcitys[i].index===datas ) {
            return false;
          } 
          
          
        }  return true;
      }
    }
  }
};
</script>

<style>
</style>