module.exports = {
  branches: [
    { name: 'main', prerelease: false },
    { name: 'dev', prerelease: true },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'docs', scope: 'README', release: 'patch' }
        ],
        parseOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: ':sparkles: New Features', hidden: false },
            { type: 'fix', section: ':bug: Bug Fixes', hidden: false },
            { type: 'refactor', section: ':zap: Code Refactor', hidden: false },
            { type: 'perf', section: ':fast_forward: Performance', hidden: false },
            { type: 'revert', section: ':hedgehog: Revert', hidden: false },
            { type: 'docs', hidden: true },
            { type: 'style', hidden: true },
            { type: 'test', hidden: true },
            { type: 'build', hidden: true },
            { type: 'ci', hidden: true },
            { type: 'chore', hidden: true }
          ]
        }
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['dist/**/**/*.{js,js.map}', 'package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
}
