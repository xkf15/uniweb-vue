<template lang="pug">
  #roomAdmin
    layout(:tag="menuTitle", :user-info="userInfo", :colleges="colleges")
      .sidebar(slot="sidebar")
        dropdown-menu(:menu="menu", :menu-title="menuTitle")
        .searchBox(v-if="$route.path === '/user/room/admin'")
          .searchTitle
            strong 搜索
          .searchInput
            .searchBarLabel 标签
            //- el-select.el-select(v-model="labels", filterable, remote, placeholder="请输入关键词", :remote-method="remoteMethod", :loading="loading")
            el-select.el-select(v-model="chosenLabel", filterable, remote, placeholder="请输入关键词")
              el-option(v-for="(item, index) in labels", :key="index", :label="item.name_ch", :value="item.id")
          //- input.searchInput(v-model="search.searchLabel", placeholder="请输入房间标签")
          .searchInput
            .searchBarLabel 名称
            //- el-select.el-select(v-model="labels", filterable, remote, placeholder="请输入关键词", :remote-method="remoteMethod", :loading="loading")
            //-   el-option(v-for="(item, index) in labels", :label="item.name_ch", :value="item.id")
          button.btn(type="danger") 搜索
</template>

<script>
import Layout from '@/components/common/Layout'
import DropdownMenu from '@/components/common/DropdownMenu'
import { mapState } from 'vuex'
import store from '@/store'

export default {
  components: {
    Layout,
    DropdownMenu
  },
  beforeRouteEnter: async (to, from, next) => {
    await store.dispatch('GetInitialData')
    await store.dispatch('GetUserInfo')
    next()
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo,
      colleges: state => state.login.initialData[1],
      labels: state => state.login.initialData[0]
    }),
    ifShowSearchTable () {
      const route = this.$route.path.split('/')
      if (route.indexOf('admin')) {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      // userInfo: {},
      // colleges: [],
      menu: [
        {
          title: '房间管理',
          path: '/user/room/admin'
        },
        {
          title: '发布新房间',
          path: '/user/room/new'
        }
      ],
      menuTitle: '房间',
      search: {
        searchLabel: '',
        searchTitle: ''
      },
      chosenLabel: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  #roomAdmin
    .searchBox
      padding-top 10px
      .searchTitle
        text-align left
        padding 0 0 5px 25px
        font-size 15px
        color #6c64db
        border-bottom #ddd solid 1px
      .searchInput
        display flex
        align-items center
        padding 10px 10px 0 10px
        .el-select
          flex 2
        .searchBarLabel
          // width 50px
          flex 1
          color #6c64db
          padding 0
        .searchInput
          padding 0
    .btn
      color white
      margin-top 10px
      padding 3px 12px
      background #ec5367
      border 1px solid #ec5367
      border-radius 5px
      cursor pointer
    .btn:hover
      opacity 0.7
</style>
