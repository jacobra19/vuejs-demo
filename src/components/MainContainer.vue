<template >
    <div v-if="!isLoading"  class="mainCont"> 

        <button v-on:click="getData">update users</button>
        <div v-for="user in users" v-bind:key="user.id.value" class="user">
            <p>{{user.name.first}}</p>
            <img :src="user.picture.medium" width="50" height="50"/>
        </div>

    </div>

    <div v-else class="loadingCont">

        <p>loading</p>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    props: {
        message: String
    },
    data(){
        return{
            users: [],
            isLoading: true,
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log(this.message)
        this.getData()
    },
    mounted(){

    },
    beforeMount(){
        console.log('beforeMount')

    },
    methods:{
        handleClick: function(){
            console.log('1', 1)
        },

        getData: function(e){
            if(e) console.log('e', e)
            this.isLoading = true;
            axios.get(`https://randomuser.me/api?results=4`)
                .then(response => {
                // JSON responses are automatically parsed.
                    console.log('response.data', response.data)
                    this.isLoading = false;
                    this.users = response.data.results
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
    },

}
</script>

<style scoped>
.mainCont{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    overflow: auto;
}
.loadingCont{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}
.user{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 300px;
    border: 1px solid aqua;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 60px;

}
button{
    margin: 20px;
}
p{
    margin: 0;
    padding: 0;
}
img{
    border: 1px solid aqua;
    border-radius: 50%;
}
</style>