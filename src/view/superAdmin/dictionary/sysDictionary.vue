<template>
  <div>
    <warning-bar title="获取字典且缓存方法已在前端utils/dictionary 已经封装完成 不必自己书写 使用方法查看文件内注释" />
    <div class="gva-search-box">
      <el-form :inline="true" :model="searchInfo">
        <el-form-item label="字典名（中）">
          <el-input v-model="searchInfo.name" placeholder="搜索条件" />
        </el-form-item>
        <el-form-item label="字典名（英）">
          <el-input v-model="searchInfo.type" placeholder="搜索条件" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="searchInfo.status" clear placeholder="请选择">
            <el-option key="true" label="是" value="true" />
            <el-option key="false" label="否" value="false" />
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="searchInfo.desc" placeholder="搜索条件" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button size="small" type="primary" icon="plus" @click="openDialog">新增</el-button>
      </div>
      
      df
      <bu-table :headerTopfixed="false" apiUrl="/mock/table.json" :isPaging="false">
      <el-table-column label="创建时间" prop="CreatedAt"></el-table-column>
      <el-table-column label="更新时间" prop="UpdatedAt"></el-table-column>
      <el-table-column label="name" prop="name"></el-table-column>
      <el-table-column label="tagsType" prop="tagsType"></el-table-column>
    </bu-table>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" title="弹窗操作">
      <el-form ref="dialogForm" :model="formData" :rules="rules" size="medium" label-width="110px">
        <el-form-item label="字典名（中）" prop="name">
          <el-input v-model="formData.name" placeholder="请输入字典名（中）" clearable :style="{ width: '100%' }" />
        </el-form-item>
        <el-form-item label="字典名（英）" prop="type">
          <el-input v-model="formData.type" placeholder="请输入字典名（英）" clearable :style="{ width: '100%' }" />
        </el-form-item>
        <el-form-item label="状态" prop="status" required>
          <el-switch v-model="formData.status" active-text="开启" inactive-text="停用" />
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-model="formData.desc" placeholder="请输入描述" clearable :style="{ width: '100%' }" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button size="small" @click="closeDialog">取 消</el-button>
          <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SysDictionary',
}
</script>

<script setup>

import WarningBar from '@/components/warningBar/warningBar.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { formatBoolean, formatDate } from '@/utils/format'

const router = useRouter()

const formData = ref({
  name: null,
  type: null,
  status: true,
  desc: null,
})
const rules = ref({
  name: [
    {
      required: true,
      message: '请输入字典名（中）',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请输入字典名（英）',
      trigger: 'blur',
    },
  ],
  desc: [
    {
      required: true,
      message: '请输入描述',
      trigger: 'blur',
    },
  ],
})

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})

const onReset = () => {
  searchInfo.value = {}
}

// 条件搜索前端看此方法
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  if (searchInfo.value.status === '') {
    searchInfo.value.status = null
  }
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async () => {

}

getTableData()

const toDetail = (row) => {
  router.push({
    name: 'dictionaryDetail',
    params: {
      id: row.ID,
    },
  })
}

const dialogFormVisible = ref(false)
const type = ref('')
const updateSysDictionaryFunc = async (row) => {

}
const closeDialog = () => {
  dialogFormVisible.value = false
  formData.value = {
    name: null,
    type: null,
    status: true,
    desc: null,
  }
}
const deleteSysDictionaryFunc = async (row) => {

}

const dialogForm = ref(null)
const enterDialog = async () => {

}
const openDialog = () => {
  type.value = 'create'
  dialogFormVisible.value = true
}
</script>

<style>

</style>
