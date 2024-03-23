<script setup lang="ts">
let {data} = useFetch("/api/test");

</script>

<template>
  <div>
    {{data}}
  </div>
</template>
