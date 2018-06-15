var app = new Vue({
    el: "#root",
    data:{
        showingAddPrompt: false,  /*显示弹窗的初始值是false*/
        showingEditPrompt: false,
        showingDeletePrompt: false
    },

    mounted: function(){
        console.log("mounted");
    },

    methods: {

    }
})