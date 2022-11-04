module.exports = {
    // 可选类型
    types: [
        { value: ':sparkles: feat', name: '✨ feat:     新功能' },
        { value: ':bug: fix', name: '🐛 fix:      修复bug' },
        { value: ':tada: init', name: '🎉 init:     初始化' },
        { value: ':pencil2: docs', name: '✏️  docs:     文档变更' },
        {
            value: ':lipstick: style',
            name: '💄 style:     代码的样式美化(不影响代码运行的变动)',
        },
        {
            value: ':recycle: refactor',
            name: '♻️  refactor: 重构(既不是增加feature，也不是修复bug)',
        },
        { value: ':zap: perf', name: '⚡️ perf:     性能优化' },
        { value: ':white_check_mark: test', name: '✅ test:     测试' },
        { value: ':rewind: revert', name: '⏪️ revert:   回退' },
        { value: ':package: build', name: '📦️ build:    打包' },
        { value: ':rocket: chore', name: '🚀 chore:    构建/工程依赖/工具' },
        {
            value: ':construction_worker: ci',
            name: '👷 ci:       CI related changes',
        },
    ],
    // 消息步骤
    messages: {
        type: '请选择提交类型:',
        customScope: '请输入修改范围(可选):',
        subject: '请简要描述提交(必填):',
        body: '请输入详细描述(可选):',
        footer: '请输入要关闭的issue(可选):',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    },
    // 跳过问题
    allowCustomScopes: false,
    allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
    skipQuestions: ['body', 'footer'],
    // subject文字长度默认是72
    subjectLimit: 72,
}
