<template lang="pug">
.layout
  navbar(:login="true", :avatar="userInfo.avatar_thumbnail")
  .white
    user-cover(:userInfo="userInfo", :colleges="colleges")
  .wrap
    .sidebar
      slot(name="sidebar")
    .content
      .decorator
        el-breadcrumb(separator="/")
          el-breadcrumb-item(v-if="breadcrumb", v-for="(item, index) of breadcrumb", :to="{ path: item.path }", :key="item.id")
            span.br {{ item.title }}
          el-breadcrumb-item
            span.last {{ tag }}
        hr
      slot(name="container")
</template>


<script>
import DropdownMenu from '@/components/common/DropdownMenu'
import Navbar from '@/components/common/Navbar'
import UserCover from '@/components/common/UserCover'

export default {
  components: {
    DropdownMenu,
    Navbar,
    UserCover
  },
  props: ['tag', 'breadcrumb', 'userInfo', 'colleges']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
$gap = 120px
$background-color = #f2f0f4
$margin-bottom = 30px
.layout
  background-color $background-color
 .white
    background white
    margin 20px $gap
  .wrap
    margin 20px $gap 0 $gap
    display flex
  .sidebar
    margin-bottom $margin-bottom
    background white
    flex 1
  .content
    flex 4
    padding-right 20px

.content
  margin-left 20px
  margin-bottom $margin-bottom
  background white
  .decorator
    background url(../../assets/jumb.png) no-repeat bottom right
    background-size 180px
    text-align left
    padding 15px 20px 0 20px
    .br, .last
      font-size 15px
    .br:hover
      transition 0.3s
      color #ff586d
    .br
      color #6c64bd
    hr
      margin 13px 0
      border 1px solid #e2dfdf
</style>
