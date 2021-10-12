<template>
  <div>
    <h2 v-for="item in Items" :key="item.id">{{item.name}}</h2>
  </div>
</template>

<script>
export default {
    name:'about',
    
    data() {
        return {
            Items: [
                {id:1,name:'overview'},
                {id:2,name:'hlo'},
                {id:3,name:'about'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>
