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
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :src="meetup.imageUrl"
                    :key="meetup.id"
                    @click.native.stop="onLoadMeetup(meetup.id)">
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
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        }
    },
    methods: {
        onLoadMeetup (id) {
            this.$router.push('/meetups/'+id)
        }
    }
}
</script>
<style scoped>
    .title{
        position: absolute;
        bottom:60px;
        background-color: rgba(0, 0, 0, 0.5);
        color:white;
        font-size: 2em;
        padding:30px;
        left:10px;
        border-radius:3px;
    }
</style>

