Vue.component('component1',{
    props:["link"],
    template:'<a class="button" style="vertical-align:middle" :href="link"><span><slot></slot></span></a>'
    
});

new Vue({
    el:'#componentbtn',
})