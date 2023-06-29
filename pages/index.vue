<template>
  <div class="flex flex-col"> 
    <div class="text-4xl font-bold underline">今日のおすすめ</div>
    <div class="m-3 bg-white rounded-lg shadow">
      <ul class="divide-y-2 divide-gray-100">
        <li class="p-3 hover:bg-blue-100" v-for="item in items">
          <span class="font-bold text-white bg-red-700" v-if="item.price > 1000">高級品</span>{{ item.message }}:　{{ item.price }}円
        </li>
      </ul>
    </div>
    <div id="app">
      <div class="col-5">
        <label for="name">注文の商品名</label>
        <input v-model="name" type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <div class="message" v-if="isInvalidName">{{ name }}は商品名として短すぎます</div>
        <div class="message" v-if="isBlank">何か入力してください</div>
        <button @click="order()" class="button-blue">注文</button> 
        <button @click="change()" class="button-red">変更</button>
      </div>
      <div :style="bindStyle">bind style</div>
      <div>
        <p>
          <span>大きさ：</span>
          <input
            v-model="size_data2.range"
            type="range"
            max="500"
            min="10"
          />
        </p>
        <p>
          <span>赤：</span>
          <input
            v-model="size_data2.red"
            type="range"
            max="255"
            min="0"
          />
        </p>
        <p>
          <span>緑：</span>
          <input
            v-model="size_data2.green"
            type="range"
            max="255"
            min="0"
          />
        </p>
        <p>
          <span>青：</span>
          <input
            v-model="size_data2.blue"
            type="range"
            max="255"
            min="0"
          />
        </p>
        <div :style="bindStyle2"></div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  data: () =>{
    return {
      items: [{ message: 'たこ焼き', price: 400 }, { message: '串かつセット', price: 1200 }, { message: '男はつらいよ', price: 900 }, { message: '梅くらげ', price: 200 }],
      name: 'いつものやつ',
      size_data: {width: 300, height: 50, color: '#aa00cc', fontsize: 36},
      size_data2: {range: 10, red: 0, blue: 0, green: 0},
    }
  }, 
  methods: {
    order: function () {
      alert(this.name+"をご注文");
    },
    change: function () {
      this.name = "いつものやつ";
    },
  },
  computed: {
    isInvalidName(){
      return this.name.length < 4 && this.name.length > 0;
    },
    isBlank(){
      return this.name.length == 0;
    },
    bindStyle(){
      return `width: ${this.size_data.width}px; height: ${this.size_data.height}px; color: ${this.size_data.color}; font-size: ${this.size_data.fontsize}px;`
    },
    bindStyle2(){
      return `width: ${this.size_data2.range}px; height: ${this.size_data2.range}px; background: rgb(${this.size_data2.red}, ${this.size_data2.green}, ${this.size_data2.blue})`
    },
  }
}
</script>