# AI Agent Status Light Docs

VitePress documentation site for the AI Agent Status Light planning docs.

## Published Docs

The docs are available at:

https://afronorana.github.io/semafori-docs/docs/

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Changelog

The `Generate changelog` GitHub Actions workflow uses semantic-release to read conventional commit messages on `main`, compute the next semantic version, create/update `CHANGELOG.md`, and push a release commit plus git tag.

Commit examples:

```text
feat: add desktop discovery docs
fix: correct ESP32 pin mapping
docs: add PCBA manufacturing guide
feat!: change device setup protocol
```

Version rules:

- `feat` creates a minor release.
- `fix`, `perf`, `docs`, `refactor`, `build`, and `revert` create a patch release.
- `!` or `BREAKING CHANGE` creates a major release.
- `chore`, `ci`, `style`, and `test` do not create releases by default.

If the repository already has a current version, tag it before the first workflow run, for example `v0.1.0`, so future changelog entries start from the right baseline.
