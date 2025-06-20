const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaoyiqing/",
            name: "gaoxiaoyiqing",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaoyiqing/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫情期间高校人员管理"
        } 
    }
}
export default base
