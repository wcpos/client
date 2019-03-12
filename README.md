# Client app for WooCommerce POS

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

### Version and Release
All version can be kept in sync by using `yarn version` eg: 
- `yarn version --patch`
- `yarn version --minor`
- `yarn version --major`

Bumping the version will automatically tag, commit and push the release.