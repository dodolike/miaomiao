const state = {
 cityname : window.localStorage.getItem('citynm')||'北京',
 cityid : window.localStorage.getItem('cityid')||1
    };
  let mutations = {
    CON_CITY(state,data){
      state.cityname = data.nm
      state.cityid = data.id
    }
    };
    let actions = {

    }





export default {
    namespaced : true,
 state,
 mutations,
 actions
}