module.exports = {
  list: ['test', 'feat', 'fix', 'chore', 'refactor', 'style', 'ci'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: '构建流程或工具脚本等变更',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI 相关的变更',
      emoji: '🎡',
      value: 'ci',
    },
    feat: {
      description: '新功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'Bug修复',
      emoji: '🐛',
      value: 'fix',
    },
    refactor: {
      description: '不影响功能和bug的重构',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: '版本发布',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: '代码格式化、注释等变更',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: '测试功能',
      emoji: '💍',
      value: 'test',
    },
  },
};
