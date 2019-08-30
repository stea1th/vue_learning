<template>
    <table id="chess-board">
        <tbody>
        <tr v-for="(column, inx) in 8"
            :key="inx">
            <chess-cell :inx="inx" />
        </tr>
        </tbody>
    </table>
</template>

<script>
    import ChessCell from "./ChessCell";

    export default {
        name: "vadim",
        components: {ChessCell},
        el: '#chess-board',
        data(){
            return {
                letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                cellStyle: {
                    height: '50px',
                    width: '50px'
                }
            }
        }
    }
</script>

