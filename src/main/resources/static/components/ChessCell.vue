<template>
    <th class="cell" :class="testObject" v-for="(cell, index) in letters"
                :cell="`${cell + (8 - inx)}`"
                :num="inx * 8 + index + 1"
                :inx="inx + 1"
                :key="index"
                :style="cellStyle">
        <div :id="cell" :num="num"></div>
    </th>
</template>
<script>
    export default {
        name: 'chess-cell',
        props: ['cell', 'num', 'inx'],
        computed: {
            testObject: function () {
                return this.inx % 2 === 0 ? this.num % 2 === 0 ? 'white' : 'black' : this.num % 2 === 0 ? 'black' : 'white'
            }

        }

    }
</script>
