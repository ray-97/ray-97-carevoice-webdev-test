<template>
    <div>
        <h1>预览</h1>
        <el-card class="box-card elcard">
            <div slot="header" class="clearfix">
                <h1>个人信息</h1>
            </div>
            <el-form :inline="true">
                <el-form-item class="elleftitem" label="被保人姓名:">
                    <el-input class="elrightitem0" :disabled="true" v-model="insured.name" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true">
                <el-form-item class="elleftitem" label="出生日期:">
                    <el-input class="elrightitem1" :disabled="true" v-model="insured.birthday" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true">
                <el-form-item class="elleftitem" label="手机号码:">
                    <el-input class="elrightitem2" :disabled="true" v-model="insured.contact" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true">
                <el-form-item class="elleftitem" label="邮箱:">
                    <el-input class="elrightitem3" :disabled="true" v-model="insured.email" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            <el-button type="success" @click="triggerAPI">Submit</el-button>
            <!-- <button type="button" @click="triggerAPI">Submit</button> -->
        </el-card>

        <router-link to="/Upload">上一步</router-link>
    </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
    name: "Preview",
    data() {
        return {
            response: {}
        }
    },
    computed: {
        insured() {
            return store.getters.insured;
        }
    },
    methods: {
        triggerAPI() {
            store.dispatch('triggerAPI');    
        }
    },
}
</script>

<style scoped>
.elcard {
    margin-bottom: 60px;
}
.elrightitem0 {
    margin-left: 150px;
}

.elrightitem1 {
    margin-left: 160px;
}

.elrightitem2 {
    margin-left: 160px;
}

.elrightitem3 {
    margin-left: 185px;
}

.elleftitem {
    margin-right: 200px;
}
</style>