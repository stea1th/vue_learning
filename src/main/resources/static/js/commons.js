
$(function () {
    // $('#test').val('Hi my boy!!');
    // console.log($('#test'));
    $('#test').text('Hallo you boy');
    app.message = "trubochist";
    // console.log(app.message);



});

function getInputValue(){
    // console.log($('#testInput').val());
    $.post('/first/test-input', {name: $('#testInput').val()} ).done(function (data) {
        console.log(data);
    });
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
});

var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        seen: true
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        todos: [
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Привет, Вадюля!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app5 = new Vue({
    el: '#app5',
    data: {
        message: "Удалить число",
        todos : []
    },
    methods: {
        addRandomNumber: function () {
            this.todos.push({text: "Number" + Math.round(Math.random() * 10)})
        },
        removeRandomNumber: function () {
            var length = this.todos.length;
            if(length > 0){
                var num = Math.floor(Math.random() * length) + 1;
                this.message = "Удалили число " + num;
                for (var i = 0; i < length; i++) {
                    if(i === num-1){
                        this.todos.splice(i, 1)
                    }
                }
            }
        }
    }
});

var app6 = new Vue({
    el: '#app6',
    data:{
        message: "Я здесь царь :)"
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text + " " + todo.id }}</li>'
});

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'Овощи' },
            { id: 1, text: 'Сыр' },
            { id: 2, text: 'Что там ещё люди едят?' }
        ]
    }
});



