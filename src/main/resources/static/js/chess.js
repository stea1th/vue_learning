var chessTitle = new Vue({
    el: '#chess-title',
    data: {
        message: "Created chess table"
    }
});

Vue.component('chess-cell', {
    props: ['cell'],
    template: '<th></th>'

});

var chessCell = new Vue({
    el: '#chess-table',
    data: {
        cellStyle: {
            height: '50px',
            width: '50px',
            border: '1px solid black'
        }
    }
});