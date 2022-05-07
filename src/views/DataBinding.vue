<template>
    <div><input type="text" v-model="valueModel" /></div>
</template>

<script>
export default ({
    data() {
        return {
            htmlString: '<p style="color:red; background-color:black;">빨간글씨 ㅎㅎㅎㅎ</p>',
            valueModel: 'south Korea'
        };
    },
})
</script>
