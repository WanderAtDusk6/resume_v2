outline: [
  {
    id: "sec-1",
    label: "个人介绍",
    status: "pending",
    type: "section",
    children: [
      {
        id: "k-1-1",
        label: "基本信息",
        status: "pending",
        type: "concept",
        description: "地点：杭州 | 出生年月: 1999.08",
      },
      {
        id: "k-1-2",
        label: "工作经验",
        status: "pending",
        type: "concept",
        description:
          "5年开发经验(2年开发运维+2.5年测试开发),云原生DevOps实践经验, 数据治理经验",
      },
      {
        id: "k-1-3",
        label: "特点",
        status: "pending",
        type: "concept",
        description: "负责; 稳定; 问题解决者; 文档读了很多所以上手特别快, ",
      },
    ],
  },
  {
    id: "sec-2",
    label: "教育背景",
    status: "pending",
    type: "section",
    children: [
      {
        id: "k-2-1",
        label: "浙江科技大学",
        status: "pending",
        type: "concept",
        description:
          "本科 | 材料成型及控制工程 (自学转IT) | 2017-09 至 2021-06",
      },
      {
        id: "k-2-2",
        label: "相关课程",
        status: "pending",
        type: "concept",
        description: "数据结构 | 算法设计 | 计算机网络 | 操作系统 | 数据库原理",
      },
      {
        id: "k-2-3",
        label: "学习表现",
        status: "pending",
        type: "concept",
        description: "GPA 3.4/4.0 | 英语四级 | 计算机二级",
      },
    ],
  },
  {
    id: "sec-3",
    label: "工作经历",
    status: "pending",
    type: "section",
    children: [
      {
        id: "k-3-1",
        label: "浙大网新恒天 (道富银行项目)",
        status: "pending",
        type: "concept",
        description: "开发运维工程师 | 2023-11 至 2025-12",
      },
      {
        id: "k-3-2",
        label: "诺基亚通信系统技术(北京)有限公司",
        status: "pending",
        type: "concept",
        description: "测试开发工程师 | 2021-07 至 2023-11",
        children: [
          {
            id: "k-3-2-1",
            label: "工作内容",
            status: "pending",
            type: "keypoint",
            description:
              "作为测试开发工程师，参与开发与维护公司自研自动化测试框架(Agent 5G All in Cloud)，实现测试环境一键部署、软硬件适配及日志收集分析等功能；将创新idea落地的测试工具开发，并跨部门协作开发部分可演示原型，保障集群环境稳定，排查测试问题等。",
          },
          {
            id: "k-3-2-2",
            label: "主要贡献",
            status: "pending",
            type: "keypoint",
            description:
              "职责范围：维护自动化测试框架，简化测试环境部署，软硬件适配；技术创新：开发的测试工具获得公司级年度表彰。",
          },
        ],
      },
      {
        id: "k-3-3",
        label: "诺基亚通信系统技术(北京)有限公司",
        status: "pending",
        type: "concept",
        description: "Python开发实习生 | 2020-11 至 2021-06",
      },
    ],
  },
  {
    id: "sec-4",
    label: "项目经历",
    status: "pending",
    type: "section",
    children: [
      {
        id: "k-4-1",
        label: "Databricks平台与CICD Pipeline集成",
        status: "pending",
        type: "concept",
        description:
          "企业内CICD Pipeline，使用自定义配置文件(.grd)进行AWS资源部署，后因对databricks新功能支持需求较多，CICD databricks模块单独拆出，由团队架构师与我负责开发维护。",
        children: [
          {
            id: "k-4-1-1",
            label: "数据向功能",
            status: "pending",
            type: "keypoint",
            description:
              "跨域数据目录(Foreign Catalog)；数据质量监控(monitor data quality)；外部数据安全访问控制(external data access)；基于属性的细粒度权限管理(ABAC)等。",
          },
          {
            id: "k-4-1-2",
            label: "计算向功能",
            status: "pending",
            type: "keypoint",
            description:
              "多种类cluster模板(如GPU cluster适配，标准cluster，组专用cluster等)；SQL warehouse(endpoint)；instance pool；runtime与公司内部image service等。",
          },
          {
            id: "k-4-1-3",
            label: "安全权限向功能",
            status: "pending",
            type: "keypoint",
            description:
              "角色权限设计(user/group/SP)；多环境fine-grained access control；SP token/OAuth secret等。",
          },
          {
            id: "k-4-1-4",
            label: "其他功能",
            status: "pending",
            type: "keypoint",
            description:
              "微服务：secret即时权限操作(AWS secret+DBS资源+前端同步)等；极简脚本部署服务：sql/notebook自动以用户所属组default SP权限，代执行代码；平台数据迁移：因login条例修改，迁移all user workspace数据至SSO user workspace下。",
          },
        ],
      },
      {
        id: "k-4-2",
        label: "自动化测试项目开发与维护",
        status: "pending",
        type: "concept",
        description:
          "通信领域Cloud RAN架构中，企业内部测试环境的准备与自动化测试用例执行。",
        children: [
          {
            id: "k-4-2-1",
            label: "负责内容",
            status: "pending",
            type: "keypoint",
            description:
              "相关功能模块开发与维护，软硬件环境变化适配，文档维护，问题协助排查与解决。",
          },
          {
            id: "k-4-2-2",
            label: "技术栈",
            status: "pending",
            type: "keypoint",
            description: "python, shell, paramiko, robot framework。",
          },
        ],
      },
      {
        id: "k-4-3",
        label: "测试用例错误原因自动分类",
        status: "pending",
        type: "concept",
        description:
          "改进原有测试程序日志收集模块，收集错误栈信息，建立错误log数据集，与测试人员协助完成初版人工标注，完善收集-分析-再推送结果链路。",
        children: [
          {
            id: "k-4-3-1",
            label: "主要参与部分",
            status: "pending",
            type: "keypoint",
            description:
              "数据集设计与建立，开发与跑通数据收集-初版算法分类-结果推送流程，及后续日志数据的聚合与可视化。",
          },
          {
            id: "k-4-3-2",
            label: "效果",
            status: "pending",
            type: "keypoint",
            description:
              "管理端汇总报表网页汇总，个人端分类结果邮件分发；分类正确率≈90%(验证集上)。",
          },
          {
            id: "k-4-3-3",
            label: "技术栈",
            status: "pending",
            type: "keypoint",
            description: "sklearn, pytorch, grequests, pyecharts, mongodb。",
          },
        ],
      },
      {
        id: "k-4-4",
        label: "某通信模块内部消息流程可视化-前端部分",
        status: "pending",
        type: "concept",
        description:
          "某模块依照一份繁杂的信令流程规范图设计，因流程复杂+运行时产生log文件层次也复杂+测试人员排查问题不方便+解决经验文档零散，编写log解析脚本+拆解原大信令图后+整理解决经验文档，辅以前端可视化，提高对此模块的问题排查效率。",
        children: [
          {
            id: "k-4-4-1",
            label: "负责内容",
            status: "pending",
            type: "keypoint",
            description:
              "前端ui，交互逻辑控制和效果的实现；环节局部信令流程图状态样式呈现；异常消息的解决方案栏的增删改查功能(便于集中解决经验文档)。",
          },
          {
            id: "k-4-4-2",
            label: "技术栈",
            status: "pending",
            type: "keypoint",
            description:
              "vue, pinia, Vue Router, (其他相关的：elasticsearch, logstash, kibana, mysql)。",
          },
        ],
      },
    ],
  },
  {
    id: "sec-5",
    label: "荣誉奖项",
    status: "pending",
    type: "section",
    children: [
      {
        id: "k-5-1",
        label: "前20%绩效",
        status: "pending",
        type: "concept",
        description: "浙大网新恒天 | 2025 | 年度 | 部门级 绩效271划分，拿了2。",
      },
      {
        id: "k-5-2",
        label: "诺基亚杭州研发中心-第三届蓝鼎奖",
        status: "pending",
        type: "concept",
        description: "诺基亚 | 2023 | 公司级 | Best ideas of Innovation。",
      },
      {
        id: "k-5-3",
        label: "诺基亚(杭州)测试协会-2022年度Top3最佳测试工具奖",
        status: "pending",
        type: "concept",
        description: "诺基亚 | 2022 | 年度。",
      },
      {
        id: "k-5-4",
        label: "自动化测试重要贡献者 | 最佳创意奖",
        status: "pending",
        type: "concept",
        description: "诺基亚 | 2022 | 部门级 | 季度。",
      },
      {
        id: "k-5-5",
        label: "竞赛获奖: 数学建模二 | 计算机设计三 | 高数",
        status: "pending",
        type: "concept",
        description: "浙江科技大学 | 2021 | 校级。",
      },
    ],
  },
];
