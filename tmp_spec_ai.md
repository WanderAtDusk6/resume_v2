# Spec

## 核心需求

1. **不修改第三方 schema**：保持 `jsonresume/resume-schema/schema.json` 不变
   **新增自定义 schema**：新增用户自定义字段 schema 和 ai 修改字段 schema
2. **真实数据源**：`resume-zh.json` 作为真实数据，不包含目标岗位信息
3. **AI 标注格式**：使用类似 `_ai_modifiable": ["summary", "highlights"]` 的方式

## 期望效果

- `output/resume-zh.json` 包含完整真实数据和 AI 标注
- AI 可根据标注规则生成岗位特定简历
- 保持数据结构清晰易维护
- 不破坏现有功能

## 禁止操作

- 不要修改第三方 schema 文件
- 不要虚构项目和经历
- 不要设计过于复杂的数据结构
