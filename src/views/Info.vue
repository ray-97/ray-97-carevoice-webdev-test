<template>
    <div class="bg">
        <div>
            <h1>个人信息</h1>

            <el-card class="box-card elcard">
                <div slot="header" class="clearfix" ref="bg">
                    <label>被保人</label>
                </div>
                <el-form :inline="true">
                    <el-form-item label="被保人姓名">
                        <el-input v-model="insured.name" placeholder="请输入保人姓名"></el-input>
                    </el-form-item>
                    <el-form-item class="elrightitem" label="出生日期">
                        <el-date-picker v-model="insured.birthday" type="date" placeholder="请选择"></el-date-picker>
                    </el-form-item>
                </el-form>
                <el-form :inline="true">
                    <el-form-item class="elleftitem" label="手机号码">
                        <el-input v-model="insured.contact" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item class="elrightitem" label="邮箱">
                        <el-input v-model="insured.email" placeholder="请输入邮箱地址"></el-input>
                    </el-form-item>
                </el-form>
            </el-card>
            <el-card class="box-card elcard">
                <div slot="header" class="clearfix">
                    <label>投保人</label>
                </div>
                <el-form :inline="true">
                    <el-form-item label="投保人姓名">
                        <el-input v-model="holder.name" placeholder="请输入保人姓名"></el-input>
                    </el-form-item>
                    <el-form-item class="elrightitem" label="手机号码">
                        <el-input v-model="holder.contact" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
        
        <router-link to="/Upload">下一步</router-link>

    </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
    name: 'Info',
    data() {
        return {
            insured: {
                name: "",
                birthday: "",
                contact: "",
                email: ""
            },
            holder: {
                name: "",
                contact: "",
            }
        }
    },
    updated: function() {
        // console.log("update");
        store.commit('insured', this.insured);
    },
    mounted: function() {
        // console.log("mounted");
        this.insured = store.getters.insured;
        // console.log(this.$refs.bg.parentElement.attributes);
    },
    // beforeMount:function() {
    //     this.$refs.bg.parentElement.css("background-color", "aquamarine")
    // }
}
</script>

<style scoped>

.bg {
    background-color: #96e0b3;
}

.elcard {
    margin-bottom: 30px;
}
.elrightitem {
    margin-left: 20px;
}

.elleftitem {
    margin-right: 50px;
}
</style>