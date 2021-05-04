# Client app for WooCommerce POS

Android [![Build status](https://build.appcenter.ms/v0.1/apps/e9e9ebcd-54c6-416e-9da2-d18abef5d94f/branches/master/badge)](https://appcenter.ms)

iOS [![Build status](https://build.appcenter.ms/v0.1/apps/021bef99-000c-4b12-b6fb-dbadf4a8eee5/branches/master/badge)](https://appcenter.ms)

https://img.shields.io/discord/490948346773635102?color=%237289DA&label=Pythonista&logo=discord&logoColor=white

[![Discord Chat](https://img.shields.io/discord/711884517081612298?color=%237289DA&label=WCPOS&logo=discord&logoColor=white)](https://wcpos.com/discord)  


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
