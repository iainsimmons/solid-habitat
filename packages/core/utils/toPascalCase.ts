/**
 * toPascalCase
 *
 * Removes `-` from a string and capitalises the letter after
 * as well as the first letter
 * example: my-shiny-component => MyShinyComponent
 * Used for matching component filenames
 * @param  {String} str string
 * @return {String} PascalCase string
 */
export default function toPascalCase(str) {
  return str.replace(/(^|-)([a-z])/gi, (all, seperator, letter) => {
    return letter.toUpperCase();
  });
}
