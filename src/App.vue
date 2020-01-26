<template>
    <div id="app">
        <div id='mainContainer'>
            <TopBar appTitle='My Vue App'/>
            <MainContainer message='myMessage' />
        </div>
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import MainContainer from './components/MainContainer.vue'

export default {
    name: 'app',
    components: {
        TopBar,
        MainContainer,
    }
}
</script>

<style>
* { 
    box-sizing: border-box;
}
body{
    margin: 0 !important;   
    height: 100vh;
    width: 100vw;
}
#app {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#mainContainer{
    width: 500px;
    height: 500px;
    background-color: azure;
    border: 2px solid green;
    border-radius: 5px;
}
</style>
