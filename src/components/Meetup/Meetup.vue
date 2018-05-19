<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2>{{ meetup.title }}</h2>
                    </v-card-title>
                    <v-card-media
                    :src="meetup.imageUrl"
                    height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text"><b>{{ meetup.date }} - Where it takes place</b></div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, amet reprehenderit sunt culpa officia rerum unde illo maxime, vel, in sit eveniet facere ab molestias eaque labore perferendis explicabo sapiente?</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="error">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    props: ['id'],
    computed: {
        meetup () {
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>

