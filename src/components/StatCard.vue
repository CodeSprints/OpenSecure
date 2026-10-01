<script setup lang="ts">import UiIcon from './UiIcon.vue';defineProps<{label:string;value:string;hint:string;icon:string;tone?:'blue'|'green'|'amber'|'violet'}>()</script>
<template><article class="card stat"><div :class="['icon-box',tone??'blue']"><UiIcon :name="icon"/></div><div><p class="eyebrow">{{label}}</p><strong>{{value}}</strong><p class="muted">{{hint}}</p></div></article></template>
