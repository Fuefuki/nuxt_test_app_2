<template>
  <div class="flex flex-col">
      <div>
          <h1 class="m-3 text-4xl font-bold">当店のレビュー一覧</h1>
      </div>
      <nuxt-link class="button-blue" to="/lists/new">新規レビュー</nuxt-link>
      <ReviewList :reviews="reviews.contents" />
  </div>
</template>

<script setup lang="ts">
  const {data:reviews} = await useFetch('/api/reviewList')
</script>