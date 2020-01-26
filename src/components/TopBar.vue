<template>
    <div class="TopBar_root">
        <img alt="Vue logo" src="../assets/logo.png" width="60" height="60">
        <h1 class="title">{{appTitle}}</h1>
    </div>
</template>

<script>
export default{
    props: {
        appTitle: String
    },
}
</script>

<style scoped>
.TopBar_root{
    background-color: aqua;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 15px;
}
.title{
    color: #41b883;
}
</style>