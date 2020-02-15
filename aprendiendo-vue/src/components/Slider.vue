<template>
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
  
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  
    data () {
      return {
     items: [
          {
            src: 'https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: 'https://images.pexels.com/photos/14548/pexels-photo-14548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
        ],
      }
    },
    name: "Slider",
}
</script>