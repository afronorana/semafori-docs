module.exports = {
  branches: ['main'],
  tagFormat: 'v${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'chore', release: false },
          { type: 'ci', release: false },
          { type: 'style', release: false },
          { type: 'test', release: false }
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'perf', section: 'Performance' },
            { type: 'docs', section: 'Documentation' },
            { type: 'refactor', section: 'Refactoring' },
            { type: 'build', section: 'Build System' },
            { type: 'revert', section: 'Reverts' },
            { type: 'chore', section: 'Maintenance', hidden: true },
            { type: 'ci', section: 'CI', hidden: true },
            { type: 'style', section: 'Style', hidden: true },
            { type: 'test', section: 'Tests', hidden: true }
          ]
        },
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
        },
        writerOpts: {
          commitsSort: ['type', 'scope', 'subject']
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog\n\nAll notable changes are generated from conventional commit messages.'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
}
