---
link: <other_repo>/der_dichter_spricht/cloud_platform/diff_alicloud_aws.md
---

# 阿里云与 AWS 术语对比

## 计算服务

| 服务类别 | 阿里云                                                                          | AWS                                                       | 说明                                       |
| -------- | ------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| 弹性计算 | **ECS**（Elastic Compute Service，弹性计算服务）                                | **EC2**（Elastic Compute Cloud，弹性计算云）              | 两者均为虚拟机服务，但命名不同             |
| 容器服务 | **ACK**（Alibaba Cloud Container Service for Kubernetes，容器服务Kubernetes版） | **EKS**（Elastic Kubernetes Service，弹性Kubernetes服务） | 均为托管Kubernetes服务                     |
| 容器服务 | **ECI**（Elastic Container Instance，弹性容器实例）                             | **Fargate**                                               | 均为无服务器容器服务                       |
| 容器编排 | **CS**（Container Service，容器服务）                                           | **ECS**（Elastic Container Service，弹性容器服务）        | 注意：阿里云ECS是虚拟机，AWS ECS是容器服务 |

## 存储服务

| 服务类别 | 阿里云                                          | AWS                                            | 说明                   |
| -------- | ----------------------------------------------- | ---------------------------------------------- | ---------------------- |
| 对象存储 | **OSS**（Object Storage Service，对象存储服务） | **S3**（Simple Storage Service，简单存储服务） | 均为对象存储服务       |
| 块存储   | **ECS云盘**（包括ESSD、SSD、高效云盘等）        | **EBS**（Elastic Block Store，弹性块存储）     | 均为虚拟机的块存储卷   |
| 文件存储 | **NAS**（Network Attached Storage，文件存储）   | **EFS**（Elastic File System，弹性文件系统）   | 均为网络文件系统服务   |
| 归档存储 | **OSS归档存储**/ **冷归档存储**                 | **Glacier**                                    | 均为低成本归档存储服务 |

## 网络服务

| 服务类别   | 阿里云                                     | AWS                                              | 说明                                 |
| ---------- | ------------------------------------------ | ------------------------------------------------ | ------------------------------------ |
| 虚拟网络   | **VPC**（Virtual Private Cloud，专有网络） | **VPC**（Virtual Private Cloud，虚拟私有云）     | 命名相同，功能类似                   |
| 负载均衡   | **SLB**（Server Load Balancer，负载均衡）  | **ELB**（Elastic Load Balancer，弹性负载均衡器） | 均为负载均衡服务，AWS包括ALB/CLB/NLB |
| 域名解析   | **DNS**（云解析DNS）                       | **Route 53**                                     | 均为域名系统服务                     |
| CDN服务    | **CDN**（内容分发网络）                    | **CloudFront**                                   | 均为内容分发网络服务                 |
| 弹性公网IP | **EIP**（Elastic IP Address，弹性公网IP）  | **EIP**（Elastic IP Address，弹性IP地址）        | 命名相同，功能类似                   |

## 数据库服务

| 服务类别     | 阿里云                                                           | AWS                                                      | 说明                           |
| ------------ | ---------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------ |
| 关系型数据库 | **RDS**（Relational Database Service，云数据库RDS）              | **RDS**（Relational Database Service，关系型数据库服务） | 命名相同，均支持多种数据库引擎 |
| NoSQL数据库  | **Table Store**（表格存储）                                      | **DynamoDB**                                             | 均为托管NoSQL数据库服务        |
| 缓存服务     | **Redis**（云数据库Redis版）/ **Memcache**（云数据库Memcache版） | **ElastiCache**                                          | 均为托管缓存服务               |
| 数据仓库     | **AnalyticDB for PostgreSQL**                                    | **Redshift**                                             | 均为数据仓库服务               |
| 时序数据库   | **TSDB**（Time Series Database，时序数据库）                     | **Timestream**                                           | 均为时序数据存储服务           |

## 安全与身份管理

| 服务类别 | 阿里云                                              | AWS                                                       | 说明                   |
| -------- | --------------------------------------------------- | --------------------------------------------------------- | ---------------------- |
| 身份管理 | **RAM**（Resource Access Management，资源访问控制） | **IAM**（Identity and Access Management，身份与访问管理） | 均为身份和权限管理服务 |
| 密钥管理 | **KMS**（Key Management Service，密钥管理服务）     | **KMS**（Key Management Service，密钥管理服务）           | 命名相同，功能类似     |
| 防火墙   | **Security Group**（安全组）                        | **Security Group**（安全组）                              | 命名相同，功能类似     |
| WAF服务  | **WAF**（Web应用防火墙）                            | **WAF**（Web Application Firewall）                       | 命名相同，功能类似     |
| DDoS防护 | **DDoS Protection**（DDoS防护）                     | **Shield**                                                | 均为DDoS防护服务       |

## 监控与管理

| 服务类别   | 阿里云                                                   | AWS                 | 说明                   |
| ---------- | -------------------------------------------------------- | ------------------- | ---------------------- |
| 监控服务   | **CloudMonitor**（云监控）                               | **CloudWatch**      | 均为监控和告警服务     |
| 日志服务   | **SLS**（Log Service，日志服务）                         | **CloudWatch Logs** | 均为日志收集和分析服务 |
| 资源编排   | **ROS**（Resource Orchestration Service，资源编排服务）  | **CloudFormation**  | 均为基础设施即代码服务 |
| 自动化运维 | **OOS**（Operation Orchestration Service，运维编排服务） | **Systems Manager** | 均为自动化运维服务     |

## 无服务器与中间件

| 服务类别 | 阿里云                                            | AWS                                                                     | 说明                            |
| -------- | ------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------- |
| 函数计算 | **FC**（Function Compute，函数计算）              | **Lambda**                                                              | 均为无服务器函数服务            |
| 消息队列 | **MNS**（Message Notification Service，消息服务） | **SQS**（Simple Queue Service）/ **SNS**（Simple Notification Service） | AWS将队列和通知分离为两个服务   |
| API网关  | **API Gateway**（API网关）                        | **API Gateway**                                                         | 命名相同，功能类似              |
| 事件驱动 | **EventBridge**（事件总线）                       | **EventBridge**                                                         | 阿里云2021年推出，命名与AWS一致 |

## 大数据与人工智能

| 服务类别   | 阿里云                                                       | AWS                          | 说明                         |
| ---------- | ------------------------------------------------------------ | ---------------------------- | ---------------------------- |
| 大数据计算 | **EMR**（E-MapReduce，E-MapReduce）                          | **EMR**（Elastic MapReduce） | 命名相同，均为Hadoop生态服务 |
| 机器学习   | **PAI**（Platform of Artificial Intelligence，人工智能平台） | **SageMaker**                | 均为机器学习平台服务         |
| 数据湖     | **Data Lake Analytics**（数据湖分析）                        | **Athena**                   | 均为交互式查询服务           |

## 容器镜像服务

| 服务类别 | 阿里云                                                    | AWS                                                   | 说明                 |
| -------- | --------------------------------------------------------- | ----------------------------------------------------- | -------------------- |
| 容器镜像 | **ACR**（Alibaba Cloud Container Registry，容器镜像服务） | **ECR**（Elastic Container Registry，弹性容器注册表） | 均为容器镜像存储服务 |

## 主要差异总结

1. **计算服务命名差异**：阿里云ECS是虚拟机服务，而AWS ECS是容器服务
2. **容器服务**：阿里云ACK vs AWS EKS
3. **对象存储**：阿里云OSS vs AWS S3
4. **块存储**：阿里云ECS云盘 vs AWS EBS
5. **负载均衡**：阿里云SLB vs AWS ELB
6. **身份管理**：阿里云RAM vs AWS IAM
7. **消息服务**：阿里云MNS（集成队列和通知） vs AWS SQS/SNS（分离服务）
8. **无服务器函数**：阿里云FC vs AWS Lambda

## 注意事项

- 部分服务名称相同（如RDS、VPC、KMS），但具体功能细节可能存在差异
- 同一服务在不同平台支持的引擎、规格、特性可能有所不同
- 计费模式和价格结构也存在差异
- 建议在迁移或同时使用两个平台时，仔细对比具体服务的文档
