<template lang="pug">
#user
  layout(:tag="breadcrumb[routeLength].title", :user-info="userInfo", :breadcrumb="breadcrumb.slice(0, routeLength)",:colleges="colleges")
    .sidebar(slot="sidebar")
      dropdown-menu(v-for="(menu, index) in menus", v-if="menu.active", :key="index", :menu="menu.items", :menu-title="menu.title", :idx="index")
      .searchBox(v-if="$route.path === '/user/room/admin'")
        .searchTitle
          strong 搜索
        .searchInput
          .searchBarLabel 标签
          //- el-select.el-select(v-model="labels", filterable, remote, placeholder="请输入关键词", :remote-method="remoteMethod", :loading="loading")
          el-select.el-select(v-model="searchLabel", filterable, remote, placeholder="请输入关键词")
            el-option(:key="-1", label="", value="")
            el-option(v-for="(item, index) in labels", :key="index", :label="item.name_ch", :value="item.id")
        //- input.searchInput(v-model="search.searchLabel", placeholder="请输入房间标签")
        .searchInput
          .searchBarLabel 名称
          el-select.el-select(v-model="searchTitle", filterable, remote, placeholder="请输入关键词")
            el-option(:key="-1", label="", value="")
            el-option(v-for="(item, index) in roomList", :key="index", :label="item.title", :value="item.id")
        button.btn(type="danger", @click="search()") 搜索
    .router-view(slot="container")
      router-view
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
      labels: state => state.login.initialData[0],
      roomList: state => state.rooms.roomList[0],
      searchRoom: state => state.rooms.searchRoomList
    }),
    ifShowSearchTable () {
      const route = this.$route.path.split('/')
      return route.indexOf('admin')
    },
    routeLength () {
      return this.$route.path.split('/').length - 4
    },
    menus () {
      return [
        {
          title: '房间',
          active: !this.$route.params.id,
          items: [
            // {
            //   title: '所有房间',
            //   path: '/user/room/list'
            // },
            {
              title: '房间管理',
              path: '/user/room/admin'
            },
            {
              title: '发布新房间',
              path: '/user/room/new'
            }
          ]
        },
        {
          title: '活动管理',
          active: this.$route.params.id,
          items: [
            {
              title: '房间信息',
              path: '/user/activity/' + this.$route.params.id + '/info'
            },
            {
              title: '消息管理',
              path: '/user/activity/' + this.$route.params.id + '/message'
            },
            {
              title: '成员管理',
              path: '/user/activity/' + this.$route.params.id + '/member'
            },
            {
              title: '房间设置',
              path: '/user/activity/' + this.$route.params.id + '/settings'
            }
          ]
        }
      ]
    }
  },
  data () {
    return {
      breadcrumb: [
        {
          title: '房间',
          path: '/user/room'
        },
        {
          title: '最新消息',
          path: '/user/activity'
        }
      ],
      // userInfo: {},
      // colleges: [],
      // search: {
      //   searchLabel: '',
      //   searchTitle: ''
      // },
      searchLabel: '',
      searchTitle: ''
    }
  },
  methods: {
    search () {
      const data = {
        showType: 'search',
        roomList: []
      }
      for (let room of this.roomList) {
        if (this.searchTitle === '') {
          if (this.searchLabel === '') {
            data.roomList.push(room)
          } else {
            for (let label of room.labels) {
              if (this.searchLabel === label.id) {
                data.roomList.push(room)
                break
              }
            }
          }
        } else {
          if (room.id === this.searchTitle) {
            data.roomList.push(room)
          }
        }
      }
      this.$store.dispatch('ChangeDisplayedRooms', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#user
  .searchBox
    margin-top 20px
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
