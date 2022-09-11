import toKebabCase from './toKebabCase';
import toPascalCase from './toPascalCase';

export default function matchComponentPath(
  path: string,
  componentName: string
): boolean {
  const plain = new RegExp(`\\/${componentName}(\\/index)?\\.[jt]sx`);
  const pascalCased = new RegExp(
    `\\/${componentName}(\\/${toPascalCase(componentName)})?\\.[jt]sx`
  );
  const pascalCasedFolder = new RegExp(
    `\\/${toPascalCase(componentName)}(\\/${toPascalCase(
      componentName
    )})?\\.[jt]sx`
  );
  const kebabCased = new RegExp(
    `\\/${toKebabCase(componentName)}(\\/${toKebabCase(
      componentName
    )})?\\.[jt]sx`
  );

  return (
    plain.test(path) ||
    pascalCased.test(path) ||
    pascalCasedFolder.test(path) ||
    kebabCased.test(path)
  );
}
