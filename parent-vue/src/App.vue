<template>
    <div id="app">
        <router-link to="/vue">加载vue应用</router-link> |
        <router-link to="/react">加载react应用</router-link>

        <!-- vue子应用加载到id为vue的这个dom节点 -->
        <div id="vue"></div>

    </div>
</template>