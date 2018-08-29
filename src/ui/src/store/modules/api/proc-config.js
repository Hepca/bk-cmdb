/*
 * Tencent is pleased to support the open source community by making 蓝鲸 available.
 * Copyright (C) 2017-2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 */

import $http from '@/api'

const state = {

}

const getters = {

}

const actions = {
    /**
     * 新增进程
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Object} params 参数
     * @return {promises} promises 对象
     */
    createProcess ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, params }) {
        return $http.post(`proc/${bkSupplierAccount}/${bkBizId}`, params)
    },

    /**
     * 查询进程
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Object} params 参数
     * @return {promises} promises 对象
     */
    searchProcess ({ commit, state, dispatch, rootGetters }, { bizId, params, config }) {
        return $http.post(`proc/search/${rootGetters.supplierAccount}/${bizId}`, params, config)
    },

    /**
     * 获取进程详情
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Number} bkProcessId 进程id
     * @return {promises} promises 对象
     */
    getProcessDetail ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, bkProcessId }) {
        return $http.get(`proc/${bkSupplierAccount}/${bkBizId}/${bkProcessId}`)
    },

    /**
     * 删除进程
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Number} bkProcessId 进程id
     * @return {promises} promises 对象
     */
    deleteProcess ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, bkProcessId }) {
        return $http.delete(`proc/${bkSupplierAccount}/${bkBizId}/${bkProcessId}`)
    },

    /**
     * 更新进程
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Number} bkProcessId 进程id
     * @param {Object} params 参数
     * @return {promises} promises 对象
     */
    updateProcess ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, bkProcessId, params }) {
        return $http.put(`proc/${bkSupplierAccount}/${bkBizId}/${bkProcessId}`, params)
    },

    /**
     * 批量更新进程
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Object} params 参数
     * @return {promises} promises 对象
     */
    batchUpdateProcess ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, params }) {
        return $http.put(`proc/${bkSupplierAccount}/${bkBizId}`, params)
    },

    /**
     * 获取进程绑定模块
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Number} bkProcessId 进程id
     * @return {promises} promises 对象
     */
    getProcessBindModule ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, bkProcessId }) {
        return $http.get(`proc/${bkSupplierAccount}/${bkBizId}/${bkProcessId}`)
    },

    /**
     * 绑定进程到模块
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Number} bkProcessId 进程id
     * @param {String} bkModuleName 模块名称
     * @return {promises} promises 对象
     */
    bindProcessModule ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, bkProcessId, bkModuleName }) {
        return $http.put(`proc/module/${bkSupplierAccount}/${bkBizId}/${bkProcessId}/${bkModuleName}`)
    },

    /**
     * 解绑进程模块
     * @param {Function} commit store commit mutation hander
     * @param {Object} state store state
     * @param {String} dispatch store dispatch action hander
     * @param {String} bkSupplierAccount 开发商账号
     * @param {Number} bkBizId 业务id
     * @param {Number} bkProcessId 进程id
     * @param {String} bkModuleName 模块名称
     * @return {promises} promises 对象
     */
    deleteProcessModuleBinding ({ commit, state, dispatch }, { bkSupplierAccount, bkBizId, bkProcessId, bkModuleName }) {
        return $http.delete(`proc/module/${bkSupplierAccount}/${bkBizId}/${bkProcessId}/${bkModuleName}`)
    }
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
