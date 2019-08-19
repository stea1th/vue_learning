
$(function () {
    // $('#test').val('Hi my boy!!');
    // console.log($('#test'));
    $('#test').text('Hallo you boy');
    app.message = "trubochist";
    // console.log(app.message);
});

// window.onload = function(){
//     var app = new Vue({
//         el: '#app',
//         data: {
//             message: 'Привет, Vue!'
//         }
//     });
// };

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
});

