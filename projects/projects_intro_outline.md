# outline

(ai 写)

## project-databricks-cicd

### 背景

- 组内技术栈：AWS 云平台
- 组内职责范围：CICD 全流程

### 工作内容

- 初期：学习 AWS，熟悉项目组业务逻辑
- 核心工作：开发与维护 CICD databricks 新功能

1. 设计 → 开发 pipeline → 编写 demo → 提交测试 → 对接文档
2. 协助 Ops 排查问题 → 解决/改进 pipeline → 更新文档

### 经历（简）

- 模块重构
- Run SQL 执行流程修改
- 允许授权权限表
- aws lambda rotate token
- 例子: workflow job: <https://www.databricks.com/resources/demos/tours/data-engineering/databricks-workflows?itm_data=demo_center>
- 例子：data profile: <https://www.databricks.com/resources/demos/tours/lakehouse-platform/lakehouse-monitoring-databricks?itm_data=demo_center>

### 成果

- 优化后文档获 Ops 团队认可

#### tmp: draft

raw context:

```
- 学习 aws 常用 功能
  - ec2
  - rds
  - S3, sqs, sns, lambda
  - ecs
- （内部）学习使用 公司内部 CI/CD 部署工具和配置文件
- （通用，内部）aws ec2 作为 linux 开发环境，配置环境
- （内部）熟悉开发项目 #internal
- #internal 重构开发项目，模块
- 企业级账号，（工具间信息打通），log 日志 再分配至 各组 范围
  - #public databricks audit log + s3 + opensearch
  - 背景：dbs 平台当时的 log 表只有一张，且是 account level 的，没有方便的机制去再分配给细分的用户组
- （平台管理开发）启用 SSO login only 的账号数据迁移
  - 编写迁移 guide, 提供迁移程序（主要转移 user workspace 的相关 数据， 文件）
- #databraicks 新 feature 开发，sdk 升级适配等
- #databraicks #demo #internal 使用 CICD pipeline 的 demo 例子编写
- #internal 重构，细化功能，转移执行 SQL 的原流程（deploy sever 代 connect 并等待执行，并记录 log），远端执行
- #databraicks feature 列出一些有意思的
  - data
    - foreign catalog (connection based, only read)
      - mysql, postgre, oracle, redshift ...
    - external data access (multi client exec, )
    - monitor data quality: data profile
    - ABAC (attribute-based access control)
  - data management
    - job
      - file arrival event trigger
  - workspace
  - compute
    - 公司内部 docker image service 管理
    - cluster
	    - instance_pool
    -
  - governance
    - auth and fine-grained access control
      - 举例说明
        - 相较于 software platform
    - SP token/ OAuth secret
  - ai/analytics
    - dashboard
    - model serving
- 微服务
  - dbs 即时权限操作 （AWS secret + DBS 资源 + 前端，三处同步）
    - 前端发起，非对称加密 auth + 操作内容 => aws lambda 解密 auth+ 操作 + 返回前端执行结果
- 极简 脚本 部署/执行操作（自动以当前用户所属组的 default SP 权限，执行代码）
  - sql
  - notebook (py r sql scale)
- #internal DEV | UAT | PRD 环境，资源权限限制+分配
- cicd 技术栈
  - github repo => github action => jenkins (分配 高权限部署账号)
    - ansible playbook （细粒度的 CICD pipeline 管理，部署文件处理执行）
      - ansible module 开发 #python
    - aws role
  - => 最终资源的部署（至 aws 平台上）
  - PS. => databricks platfrom => 实际 aws 平台
```

## project-auto-log-classification

...
