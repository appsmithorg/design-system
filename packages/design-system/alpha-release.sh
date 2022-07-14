echo "==============Yarn install from lock file=============="
yarn install --frozen-lockfile

echo "==============Increment version=============="
npm version prerelease --preid alpha


echo "==============Yarn build=============="
yarn build

echo "==============Yarn build=============="
npm publish --access public --tag alpha