<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('setPageInfo', pageNo-1)">上一页</button>
    <button v-show="startAndEndNumber.start > 1" @click="$emit('setPageInfo', 1)" :class="{active: pageNo==1}">1</button>

    <button v-show="startAndEndNumber.start > 2">···</button>

    <button
      v-for="(page, index) in startAndEndNumber.end"
      :key="index"
      v-show="page >= startAndEndNumber.start"
      @click="$emit('setPageInfo', page)"
      :class="{active: pageNo==page}"
    >
      {{ page }}
    </button>

    <button v-show="startAndEndNumber.end < total - 1">···</button>
    <button v-show="startAndEndNumber.end<total" @click="$emit('setPageInfo', total)" :class="{active: pageNo==total}">{{ total }}</button>
    <button :disabled="pageNo==total" @click="$emit('setPageInfo', pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },

    startAndEndNumber() {
      const { pageNo, pageSize, continues, total } = this;
      let start = 0,
        end = 0;
      if (total < continues) {
        start = 1;
        end = total;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > total) {
          end = total;
          start = total - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

.active{
    background-color: skyblue;
}
</style>