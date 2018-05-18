<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router class="info" to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router  class="error" to="/meetup/new">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :src="meetup.imageUrl"
                    :key="meetup.id">
                    <div class="title">
                        {{ meetup.title }}
                    </div>
                </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>        
    </v-container>
</template>


<script>
export default {
    data () {
        return{
            meetups: [
                {imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', id: '123123123123', title: 'Meetup in New York'},
                {imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', id: '123123123123', title: 'Meetup in New York'},             
            ]
        }
    }}
</script>
<style scoped>
    .title{
        position: absolute;
        bottom:60px;
        background-color: rgba(0, 0, 0, 0.5);
        color:white;
        font-size: 2em;
        padding:30px;
    }
</style>

