# resume_v2

## 文件导出规范

名称：`{目标岗位}_{姓名}_{工作经验年数}_{工作单位}_{学历}.pdf`
可根据具体 job description, 调整`_{JD name or id}.pdf`。
例如：

- `开发运维大数据全栈_莫盛杰_5年经验.pdf`
- `测开后端全栈_莫盛杰_2年经验_浙科诺基亚_本科.pdf`

## JSON Resume Schema

本项目使用 [JSON Resume](https://jsonresume.org/) 标准格式来管理简历数据。

### Schema 文件位置

JSON schema 文件 `https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json` 已本地存储在：
`jsonresume/resume-schema/schema.json`

### 主要字段说明

- **basics**: 基本信息（姓名、联系方式、头像等）
- **work**: 工作经历
- **education**: 教育背景
- **awards**: 获奖情况
- **certificates**: 证书
- **skills**: 技能
- **projects**: 项目经历
- **languages**: 语言能力

### 图片资源

项目截图和头像等图片资源请放置在 `images` 文件夹中。
