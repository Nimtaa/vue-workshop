// --- classic aproach ---
var classicText = document.getElementById('classic-text');
var classicInput = document.getElementById('classic-input');
classicInput.oninput = function(event){
    classicText.innerText = classicInput.value;
}

// --- vue js aproach ---
var vm = new Vue({
  el: '#app',
  data: {
    message: 'salm',
    html : "<b>paragraph</b>",
    HI:'',
    isActive:false,
    items:[
      {id:1, title:'Car'},
      {id:2, title:'Hi'},
      {id:3, title:'Book'},
      {id:4, title:'Ax'},
      {id:5, title:'V'},
      {id:6, title:'CW'},
      {id:7, title:'ZZ'},
    ]
  },
})
