/**
 * 配置文件说明
 * @type {string}
 *
 * ctx: 在本demo中，用于跨域请求远程服务器数据的网址，
 * 在实际应用中，大部分情况下topjui.all.min.js与应用程序在同一个域下，设置为空即可
 *
 * topJUI.config.mainPagePath: 系统主页面路径，不包含域名端口及参数，
 * 如果主页面访问的地址为http://localhost:8080/index.html?param=123，则此处填写/index.html
 *
 * topJUI.config.authUrl: 权限控制Url，请求后台判断用户是否有权限操作某个窗体或链接，
 * 后台返回true为有权限，false为无权限，不填表示不进行权限控制
 *
 * topJUI.language: 消息提示框的中文提示，可根据情况调整
 *
 */

var ctx = "http://demo.topjui.com";
var topJUI = {
    config: {
        ctx: "",
        mainPagePath: "/",
        authUrl: "",
        aloneUse:  true
    },
    language: {
        message: {
            title: {
                operationTips: "操作提示",
                confirmTips: "确认提示"
            },
            msg: {
                success: "操作成功",
                failed: "操作失败",
                error: "未知错误",
                checkSelfGrid: "请先勾选中要操作的数据前的复选框",
                selectSelfGrid: "请先选中要操作的数据",
                selectParentGrid: "请先选中主表中要操作的一条数据",
                permissionDenied: "对不起，你没有操作权限",
                confirmDelete: "你确定要删除所选的数据吗？"
            }
        }
    }
}