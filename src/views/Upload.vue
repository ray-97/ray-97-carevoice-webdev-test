<template>
    <div class="divmain">
        <el-card class="box-card elmain">
            <h1>添加附件</h1>
            <el-container>
                <el-main>部分文件需要打印并手写签名, 请从此处下载</el-main>
            </el-container>

            <el-select v-model="select" placeholder="选择附件">
                <el-option label="发票" value="发票"></el-option>
                <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-card>
        <el-card class="box-card elmain">
            <el-container class="otherdocs">
                <el-main>其他保险公司报销凭证</el-main>
            </el-container>

            <Attachment/>  
        </el-card> 
        <router-link to="/">上一步</router-link> |
        <router-link to="/Preview">下一步</router-link>
    </div>
</template>

<script>
import Attachment from '../components/Attachment.vue';

export default {
    name: "Upload",
    components: { Attachment },
    data() {
        return {
            select: ""
        }
    }
}
</script>

<style scoped>
.divmain {
    margin-bottom: 100px;
}

.otherdocs {
    margin-top: 40px;
}

.elmain {
    margin-bottom: 20px;
}
</style>
