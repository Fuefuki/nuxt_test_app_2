<script setup lang="ts">
    const header = ref(["番号", "タイトル"])
    const {data:reviews} = await useFetch('/api/reviewList')
</script>

<template>
    <div class="flex flex-col">
        <div>
            <h1 style="
            font-size:30px;
            text-align:center;
            margin:10px 0 auto;
            ">当店のレビュー一覧</h1>
        </div>
        <table>
            <thead>
            <tr>
                <th v-for="col in header">{{ col }}</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(review, index) in reviews.contents">
                    <th>{{ index+1 }}</th>
                    <td>{{ review.title }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>