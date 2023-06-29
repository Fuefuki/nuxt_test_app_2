<script setup lang="ts">
    import { Review } from '../types/review'
    const header = ref(["番号", "タイトル"])
    type Props = {
        reviews: Review[];
    }
    const { reviews } = defineProps<Props>()
</script>

<template>
    <table>
        <thead>
        <tr>
            <th class="p-1" v-for="col in header">{{ col }}</th>
        </tr>
        </thead>

        <tbody>
            <tr class="hover:bg-green-200" v-for="(review, index) in reviews">
                <th class="p-1">{{ index+1 }}</th>
                <td class="p-1">
                    <nuxt-link :to="`/lists/${review.id}`">
                        {{ review.title }}
                    </nuxt-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>