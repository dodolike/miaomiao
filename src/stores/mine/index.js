
let state = {
name:window.localStorage.getItem('name')||'',
isAdmin:window.localStorage.getItem('isAdmin')||false,
userHead:""
}
let mutations = {
USER_NAME(state,playload){
    state.name = playload.name,
    state.isAdmin = playload.isAdmin,
    state.userHead = playload.userHead
}
}
let actions = {

}
export default{
state,
mutations,
actions
}