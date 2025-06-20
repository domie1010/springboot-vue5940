














<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='xuesheng' && sessionTable !='caozuorenyuan'">
                    <el-form-item class="select" v-if="type!='info'"  label="操作人员" prop="caozuorenyuanId">
                        <el-select v-model="ruleForm.caozuorenyuanId" filterable placeholder="请选择操作人员" @change="caozuorenyuanChange">
                            <el-option
                                    v-for="(item,index) in caozuorenyuanOptions"
                                    v-bind:key="item.id"
                                    :label="item.caozuorenyuanName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='caozuorenyuan' && sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="操作人员姓名" prop="caozuorenyuanName">
                        <el-input v-model="caozuorenyuanForm.caozuorenyuanName"
                                  placeholder="操作人员姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="操作人员姓名" prop="caozuorenyuanName">
                            <el-input v-model="ruleForm.caozuorenyuanName"
                                      placeholder="操作人员姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='caozuorenyuan' && sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="操作人员电话" prop="caozuorenyuanPhone">
                        <el-input v-model="caozuorenyuanForm.caozuorenyuanPhone"
                                  placeholder="操作人员电话" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="操作人员电话" prop="caozuorenyuanPhone">
                            <el-input v-model="ruleForm.caozuorenyuanPhone"
                                      placeholder="操作人员电话" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='caozuorenyuan' && sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="操作人员身份证号" prop="caozuorenyuanIdNumber">
                        <el-input v-model="caozuorenyuanForm.caozuorenyuanIdNumber"
                                  placeholder="操作人员身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="操作人员身份证号" prop="caozuorenyuanIdNumber">
                            <el-input v-model="ruleForm.caozuorenyuanIdNumber"
                                      placeholder="操作人员身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='caozuorenyuan' && sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="upload" v-if="type!='info' && !ro.caozuorenyuanPhoto" label="操作人员头像" prop="caozuorenyuanPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (caozuorenyuanForm.caozuorenyuanPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.caozuorenyuanPhoto" label="操作人员头像" prop="caozuorenyuanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.caozuorenyuanPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <!--<el-col :span="12"  v-if="sessionTable !='xuesheng'">
                    <el-form-item class="select" v-if="type!='info'"  label="学生" prop="xueshengId">
                        <el-select v-model="ruleForm.xueshengId" filterable placeholder="请选择学生" @change="xueshengChange">
                            <el-option
                                    v-for="(item,index) in xueshengOptions"
                                    v-bind:key="item.id"
                                    :label="item.xueshengName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>-->

                <el-col :span="12"  v-if="sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="学号" prop="xueshengUuidNumber">
                        <el-input v-model="xueshengForm.xueshengUuidNumber"
                                  placeholder="学号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="学号" prop="xueshengUuidNumber">
                            <el-input v-model="ruleForm.xueshengUuidNumber"
                                      placeholder="学号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="学生姓名" prop="xueshengName">
                        <el-input v-model="xueshengForm.xueshengName"
                                  placeholder="学生姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="学生姓名" prop="xueshengName">
                            <el-input v-model="ruleForm.xueshengName"
                                      placeholder="学生姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="学生手机号" prop="xueshengPhone">
                        <el-input v-model="xueshengForm.xueshengPhone"
                                  placeholder="学生手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="学生手机号" prop="xueshengPhone">
                            <el-input v-model="ruleForm.xueshengPhone"
                                      placeholder="学生手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="学生身份证号" prop="xueshengIdNumber">
                        <el-input v-model="xueshengForm.xueshengIdNumber"
                                  placeholder="学生身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="学生身份证号" prop="xueshengIdNumber">
                            <el-input v-model="ruleForm.xueshengIdNumber"
                                      placeholder="学生身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="upload" v-if="type!='info' && !ro.xueshengPhoto" label="学生照片" prop="xueshengPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (xueshengForm.xueshengPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xueshengPhoto" label="学生照片" prop="xueshengPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.xueshengPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="电子邮箱" prop="xueshengEmail">
                        <el-input v-model="xueshengForm.xueshengEmail"
                                  placeholder="电子邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="电子邮箱" prop="xueshengEmail">
                            <el-input v-model="ruleForm.xueshengEmail"
                                      placeholder="电子邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='xuesheng' && type!='info'">
                    <el-form-item class="input" v-if="type!='info'"  label="住宅住址" prop="xueshengAddress">
                        <el-input v-model="xueshengForm.xueshengAddress"
                                  placeholder="住宅住址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="住宅住址" prop="xueshengAddress">
                            <el-input v-model="ruleForm.xueshengAddress"
                                      placeholder="住宅住址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="xueshengId" name="xueshengId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="留言名称" prop="xueshengliuyanbanName">
                       <el-input v-model="ruleForm.xueshengliuyanbanName"
                                 placeholder="留言名称" clearable  :readonly="ro.xueshengliuyanbanName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="留言名称" prop="xueshengliuyanbanName">
                           <el-input v-model="ruleForm.xueshengliuyanbanName"
                                     placeholder="留言名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.xueshengliuyanbanPhoto" label="留言图片" prop="xueshengliuyanbanPhoto">
                        <file-upload
                            tip="点击上传留言图片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.xueshengliuyanbanPhoto?ruleForm.xueshengliuyanbanPhoto:''"
                            @change="xueshengliuyanbanPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xueshengliuyanbanPhoto" label="留言图片" prop="xueshengliuyanbanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.xueshengliuyanbanPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="留言类型" prop="xueshengliuyanbanTypes">
                        <el-select v-model="ruleForm.xueshengliuyanbanTypes" :readonly="ro.xueshengliuyanbanTypes" placeholder="请选择留言类型">
                            <el-option
                                v-for="(item,index) in xueshengliuyanbanTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="留言类型" prop="xueshengliuyanbanValue">
                        <el-input v-model="ruleForm.xueshengliuyanbanValue"
                            placeholder="留言类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="留言详情" prop="xueshengliuyanbanText">
                        <el-input type="textarea"  :readonly="ro.xueshengliuyanbanText" v-model="ruleForm.xueshengliuyanbanText" placeholder="留言详情"></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xueshengliuyanbanText" label="留言详情" prop="xueshengliuyanbanText">
                            <span v-html="ruleForm.xueshengliuyanbanText"></span>
                        </el-form-item>
                    </div>
                </el-col>
            <input id="caozuorenyuanId" name="caozuorenyuanId" type="hidden">
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="回复详情" prop="huifuText">
                        <el-input type="textarea"  :readonly="ro.huifuText" v-model="ruleForm.huifuText" placeholder="回复详情"></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.huifuText" label="回复详情" prop="huifuText">
                            <span v-html="ruleForm.huifuText"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                caozuorenyuanForm: {},
                xueshengForm: {},
                ro:{
                    xueshengId: false,
                    xueshengliuyanbanName: false,
                    xueshengliuyanbanPhoto: false,
                    xueshengliuyanbanTypes: false,
                    xueshengliuyanbanText: false,
                    caozuorenyuanId: false,
                    huifuText: false,
                    insertTime: false,
                },
                ruleForm: {
                    xueshengId: '',
                    xueshengliuyanbanName: '',
                    xueshengliuyanbanPhoto: '',
                    xueshengliuyanbanTypes: '',
                    xueshengliuyanbanText: '',
                    caozuorenyuanId: '',
                    huifuText: '',
                    insertTime: '',
                },
                xueshengliuyanbanTypesOptions : [],
                caozuorenyuanOptions : [],
                xueshengOptions : [],
                rules: {
                   xueshengId: [
                              { required: true, message: '学生不能为空', trigger: 'blur' },
                          ],
                   xueshengliuyanbanName: [
                              { required: true, message: '留言名称不能为空', trigger: 'blur' },
                          ],
                   xueshengliuyanbanPhoto: [
                              { required: true, message: '留言图片不能为空', trigger: 'blur' },
                          ],
                   xueshengliuyanbanTypes: [
                              { required: true, message: '留言类型不能为空', trigger: 'blur' },
                          ],
                   caozuorenyuanId: [
                              { required: true, message: '操作人员不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '留言时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");

            //当前text不能修改
            if (this.role == "管理员" || this.role == "操作人员"){
                this.ro.xueshengliuyanbanText = true;
                this.ro.xueshengliuyanbanTypes = true;
            }else if(this.role == "学生"){
                this.ro.huifuText = true;
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=xueshengliuyanban_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xueshengliuyanbanTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `caozuorenyuan/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.caozuorenyuanOptions = data.data.list;
            }
         });
         this.$http({
             url: `xuesheng/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.xueshengOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }else if(this.type=='cross'){
                    var obj = this.$storage.getObj('crossObj');
                    for (var o in obj){

                      if(o=='xueshengId'){
                          this.ruleForm.xueshengId = obj[o];
                          this.ro.xueshengId = true;
                          continue;
                      }
                      if(o=='xueshengliuyanbanName'){
                          this.ruleForm.xueshengliuyanbanName = obj[o];
                          this.ro.xueshengliuyanbanName = true;
                          continue;
                      }
                      if(o=='xueshengliuyanbanPhoto'){
                          this.ruleForm.xueshengliuyanbanPhoto = obj[o];
                          this.ro.xueshengliuyanbanPhoto = true;
                          continue;
                      }
                      if(o=='xueshengliuyanbanTypes'){
                          this.ruleForm.xueshengliuyanbanTypes = obj[o];
                          this.ro.xueshengliuyanbanTypes = true;
                          continue;
                      }
                      if(o=='xueshengliuyanbanText'){
                          this.ruleForm.xueshengliuyanbanText = obj[o];
                          this.ro.xueshengliuyanbanText = true;
                          continue;
                      }
                      if(o=='caozuorenyuanId'){
                          this.ruleForm.caozuorenyuanId = obj[o];
                          this.ro.caozuorenyuanId = true;
                          continue;
                      }
                      if(o=='huifuText'){
                          this.ruleForm.huifuText = obj[o];
                          this.ro.huifuText = true;
                          continue;
                      }
                      if(o=='insertTime'){
                          this.ruleForm.insertTime = obj[o];
                          this.ro.insertTime = true;
                          continue;
                      }
                    }
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            caozuorenyuanChange(id){
                this.$http({
                    url: `caozuorenyuan/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.caozuorenyuanForm = data.data;
                    }
                });
            },
            xueshengChange(id){
                this.$http({
                    url: `xuesheng/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xueshengForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                this.$http({
                    url: `xueshengliuyanban/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.ruleForm = data.data;
                        this.caozuorenyuanChange(data.data.caozuorenyuanId)
                        this.xueshengChange(data.data.xueshengId)
                        //解决前台上传图片后台不显示的问题
                        let reg=new RegExp('../../../upload','g')//g代表全部
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`xueshengliuyanban/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.xueshengliuyanbanCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.xueshengliuyanbanCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            xueshengliuyanbanPhotoUploadChange(fileUrls){
                this.ruleForm.xueshengliuyanbanPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

