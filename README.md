# Client app for WooCommerce POS

[![Build status](https://build.appcenter.ms/v0.1/apps/e9e9ebcd-54c6-416e-9da2-d18abef5d94f/branches/master/badge)](https://appcenter.ms)

### Installation

```sh
$ git clone --recurse-submodules https://github.com/wcpos/client
```

### Submodules

```sh
git submodule foreach 'git add .'
git submodule foreach 'git commit -m "update"'
git push --recurse-submodules=on-demand
```

### Development

```sh
yarn web start
yarn desktop start
yarn storybook start
yarn mobile android
yarn mobile ios
```

### Version and Release

All version can be kept in sync by using `yarn version` eg:

- `yarn version --patch`
- `yarn version --minor`
- `yarn version --major`

Bumping the version will automatically tag, commit and push the release.
