
# Build stories for new DS components
cd packages/design-system
echo "Building stories for new DS components"
yarn && yarn build-storybook
# move stories to output folder
echo "moving story to parent folder"
mv storybook-static ../../storybook-static


# Build stories for old DS components
cd ../design-system-old
echo "Building stories for old DS components"
yarn && yarn build-storybook
# move stories to output folder
echo "moving story to parent folder"
mv storybook-static ../../storybook-static/old

