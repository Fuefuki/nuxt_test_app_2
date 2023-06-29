<template>
  <div class="flex flex-col">
      <form action="/api/reviewCreate" method="post">
          <div>
              <input class="bg-gray-50 border" type="text" name="title" value="Title">
          </div>
          <div>
              <textarea cols=20 rows=10 class="bg-gray-50 border" name="body">some review</textarea>
          </div>
          <input class="button-blue" type="submit" value="送信">
      </form>
  </div>
</template>