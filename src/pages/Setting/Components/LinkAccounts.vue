<template>
  <div>
    <add-linked-account-modal :modalHeight="'400px'"></add-linked-account-modal>
    <fade-render-transition :duration="200">
      <el-container>
        <el-main>
          <el-row>
            <el-col>
              <div class="button-inline">
                  <button type="button" class="btn btn-round btn-primary" @click="addAccount">
                    <i class="fa fa-plus"></i> Account
                  </button>
                </div>
            </el-col>
          </el-row>
          <div v-if="value.length === 0">
            <span class="text-center medium">
              No linked account found. Please add an account for currency exchange.
            </span>
          </div>
          <div v-else>
            <el-container>
              <card>
                <div class="table-responsive table-full-width">
                  <el-table :data="value">
                    <el-table-column label="Type" property="type">
                    </el-table-column>
                  </el-table>
                </div>
              </card>
            </el-container>
          </div>
        </el-main>
      </el-container>
    </fade-render-transition>
  </div>
</template>

<style scoped>
  .el-container {
    display: block;
  }

  .el-row {
    padding-top: 0;
  }

  .button-inline {
    float: right;
  }
</style>

<script scoped>
  import { FadeRenderTransition, SimpleSelect } from 'src/components/index'
  import {Table, TableColumn} from 'element-ui'
  import AddLinkedAccountModal from 'src/pages/Setting/Modals/AddLinkedAccount.vue'

  export default {
    components: {
      FadeRenderTransition,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [SimpleSelect.name]: SimpleSelect,
      [AddLinkedAccountModal.name]: AddLinkedAccountModal
    },
    props: {
      value: Array
    },
    methods: {
      addAccount () {
        this.$modal.show('add-linked-account')
      }
    }
  }
</script>