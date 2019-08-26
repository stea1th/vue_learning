var chessTitle = new Vue({
    el: '#chess-title',
    data: {
        message: "Created chess table"
    }
});

Vue.component('chess-cell', {
    props: ['cell', 'num', 'inx'],
    template: '<th class="cell" :class="testObject"><div :id="cell" :num="num"></div></th>',
    computed: {
        testObject: function () {
            return this.inx % 2 === 0 ? this.num % 2 === 0 ? 'white' : 'black' : this.num % 2 === 0 ? 'black' : 'white'
        }

    }

});

var chessCell = new Vue({
    el: '#chess-table',
    data: {
        letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        cellStyle: {
            height: '50px',
            width: '50px'

        }
    }
});