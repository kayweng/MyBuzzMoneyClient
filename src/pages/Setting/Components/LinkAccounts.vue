<template>
  <div>
    <add-linked-account-modal @returnLinkedAccount="addLinkedAccount"></add-linked-account-modal>
    <fade-render-transition :duration="200">
      <el-container direction="vertical" class="container-fluid center">
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
                <div >
                  <el-table style="width: 100%" :data="value" fixed="left">
                    <el-table-column label="Type" property="type" align="left">
                       <template slot-scope="scope">
                         <el-tag :type="scope.row.type === 'PayPal' ? 'primary' : 'success'">{{scope.row.type}}</el-tag>
                       </template>
                    </el-table-column>
                    <el-table-column label="Content" min-width="200" property="value" align="left">
                    </el-table-column>
                    <el-table-column label="Created Date" property="createdOn" align="left">
                    </el-table-column>
                    <el-table-column label="Actions">
                      <div class="td-actions" slot-scope="props">
                        <a v-tooltip.top-center="'Edit'" @click="editLinkedAccount(props.$index, props.row)" class="btn btn-primary btn-link btn-xs">
                          <i class="fa fa-pencil buzz-blue"></i>
                        </a>
                        <a v-tooltip.top-center="'Delete'" @click="deleteLinkedAccount(props.$index, props.row)" class="btn btn-danger btn-link btn-xs">
                          <i class="fa fa-close"></i>
                        </a>
                      </div>
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
  import swal from 'sweetalert2'

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
      },
      editLinkedAccount (val) {

      },
      addLinkedAccount (val) {
        this.$modal.hide('add-linked-account')

        var sameTypeExists = 0
        var sameValueExists = 0

        this.value.map(x => {
          if (x.type === val.type) {
            sameTypeExists = sameTypeExists + 1
          }

          if (x.value === val.value) {
            sameValueExists = sameValueExists + 1
          }
        })
        
        if (sameTypeExists > 0) {
          this.showNotifyMessage("Only one '" + val.type + "' linked account is allowed.", 5000, 'warning')
          return
        }

        if (sameValueExists > 0) {
          this.showNotifyMessage("'" + val.value + "' is already exists in linked account.", 5000, 'warning')
          return
        }

        this.value.push(val)
      },
      deleteLinkedAccount (index, row) {
        swal({
          type: 'warning',
          title: 'Linked Account',
          html: '<small>Are you confirm to remove selected linked account ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-primary btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            const index = this.value.indexOf(row)
            this.value.splice(index, 1)
          }
        })
      }
    }
  }
</script>