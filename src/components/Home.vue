<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center">
                <h1>Welcome to DevMeetUps!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis nostrum blanditiis odio accusantium. Laborum, ullam nihil dicta consectetur velit officiis dignissimos nemo, hic ducimus tempora excepturi eaque vel expedita tenetur unde nisi ea provident illum soluta! Quibusdam aliquam eaque quis eligendi consectetur. Alias cupiditate nisi exercitationem minus aliquam fugit!</p>
            </v-flex>
        </v-layout>  
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router class="info" to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router  class="error" to="/meetup/new">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2" >
            <v-flex xs12  sm10 md8 offset-sm1 offset-md2>
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
            <v-flex xs12 class="text-xs-center">
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
                {imageUrl: 'https://cdn3.i-scmp.com/sites/default/files/styles/2000x792/public/images/methode/2017/09/28/936dd694-9f60-11e7-9b91-f74e36ea6345_4000x1584_010803.JPG?itok=NNeLcPfc', id: '123123123123', title: 'Meetup in New York'},             
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

