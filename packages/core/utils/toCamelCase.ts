/**
 * toCamelCase
 *
 * Removes `-` from a string and capitalises the letter after
 * example: prop-name => propName
 * Used for generating component prop keys
 * @param  {String} str string
 * @return {String} camelCase string
 */
export default function toCamelCase(str) {
  return (
    str[0].toLowerCase() +
    str.substring(1).replace(/-([a-z])/gi, (all, letter) => {
      return letter.toUpperCase();
    })
  );
}
