# Accept the name of the component being created
component=${1# }

# Define the file structure we desire
file_structure="
src/$component/$component.stories.tsx
src/$component/$component.styles.tsx
src/$component/$component.test.tsx
src/$component/$component.tsx
src/$component/$component.types.ts
src/$component/index.ts"

# Create the file structure we desire
mkdir "src/$component"
echo "$file_structure" | sed '/^$/d;s/ /\//g' | xargs touch

# add the templates to the created files
cat templates/stories.txt >> src/"$component"/"$component".stories.tsx
cat templates/styles.txt >> src/"$component"/"$component".styles.tsx
cat templates/component.txt >> src/"$component"/"$component".tsx
cat templates/types.txt >> src/"$component"/"$component".types.ts
cat templates/index.txt >> src/"$component"/index.ts

# TODO: Replace the component name in the files
