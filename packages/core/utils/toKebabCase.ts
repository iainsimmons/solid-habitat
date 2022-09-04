/**
 * toKebabCase
 *
 * Replaces uppercase characters from a string and replaces
 * with a hyphen and lowercase character.
 *
 * example: MyShinyComponent => my-shiny-component
 * Used for matching component filenames
 * @param  {String} str string
 * @return {String} kebab-case string
 */
export default function toKebabCase(str) {
  return str.replace(/\B([A-Z])/g, (all, seperator, letter) => {
    return `-${letter.toLowerCase()}`;
  });
}
