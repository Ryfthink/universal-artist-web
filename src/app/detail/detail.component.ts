import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  content = `
Porifle

[toc]

# 任 峰 | 移动开发
男 · 26岁 · 本科 · 4  作经验 · 上 
15601919567 · seven__up@sina.cn
计算机科学与技术 · 本科 黑龙江科技大学 (2013 年毕业)
 
# 工作经历
## 心动网络 移动开发工程师
上海(2014.05 — 至今)
 先后对智能电视应 与移动端应 做研发 作，对难点技术做调研攻坚，对部分项 直接负责
### • TapTap 开发者中 
Angular 4 技术搭建的前端应 ，负责架构设计与开发，作为与 TapTap 对接的 商后台， 对整体业务流程的代码质 负责
### • TapTap 客户端
游戏社区平台，基于 ReactNative 技术栈开发的 iOS 应 ，负责核 功能的开发，native 库封装与对接，实现复杂的 UI 组件，优化界 交互，提升渲染效率。TapTap 上线  累 计 户 1000W， 活跃超 500W，迅速成为国内游戏 业重要的游戏社区。
### • TapTap  日志志系统
ELK技术栈实现的分布式 志系统，对 TapTap 客户端的 志做收集与统计，为 好的排查 线上问题，追踪 户使  为，提升下载成功率做数据 撑，负责平台设计与搭建， 志 采集，数据清洗，分布式存储，场景化查询等
### •  袋遥控、沙发桌 、布丁视频、沙发管家等 
先后负责以上智能电视端应 ，以及数个 型项 的研发 作，对基础组件封装提供  持，负责部分项 架构设计，对部分项 的性能做分析与优化，提升程序运 速度，磁盘 及内存占 ，代码简化等。其中沙发桌 累计 户 500W;布丁视频累计 户 1000W，  活跃超 100W;沙发管家 是成为国内市场占有率最 应 平台。

## 苏州科达科技 Android 工程师
上海(2012.09 — 2014.05)
###• TrueTouch 、MVC
先后负责以上两个 Android 应 的开发 作，以 JNI 技术对接 Native 层， XMPP 协议实 现的即时消息通讯、OpenGL 实现的多  视频，以及会议管 、企业内微博、联系 管  、 程管 等 常开发 作

## 专业技能
 • 掌握多个技术栈，包括 Android/NDK、ELK 分布式搜索、ReactNative 栈、MEAN 栈 • 掌握 Docker 运维技术，Python、Shell 脚本编程
• 掌握 Java、C/C++、JavaScript、HTML/CSS、TypeScript 等常 编程语 
• 熟悉 Android Framework、 解设计原则、设计模式
• 熟练使  Git、AndroidStudio、WebStorm、Sublime、Charles、Eclipse 等开发 具 • 具有丰富项 经验，良好的编程习惯，较强的学习适应能 
• 活跃于 Github、StackOverflow

## 期望工作
 级移动开发 (经 ) · 全职 · 上  · 25k-40k

## 个人作品
• www.septenary.cn 基于MEAN 栈开发的多 博客 站
• ryfthink.github.io 托管在 github上的 静态博客 站
• https://github.com/Ryfthink/logstash-input-alioss 基于 Ruby 开发的阿 云 志采集插件 • 以及 些个 开发的开源库 https://github.com/Ryfthink?tab=repositories&type=source
        



  `;

  constructor() { }

  ngOnInit() {
  }

}
