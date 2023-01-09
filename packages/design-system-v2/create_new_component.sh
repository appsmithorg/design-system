# Accept the name of the component being created
component=$1

# Define the file structure we desire
file_structure="
src/$component/$component.stories.tsx
src/$component/$component.styles.tsx
src/$component/$component.tsx
src/$component/$component.test.tsx
src/$component/$component.types.tsx
src/$component/index.ts"

# Create the file structure we desire
mkdir "src/$component"
echo "$file_structure" | sed '/^$/d;s/ /\//g' | xargs touch

