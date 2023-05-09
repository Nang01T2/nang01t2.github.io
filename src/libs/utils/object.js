// generic function to convert undefined properties to null
export function undefinedFieldsToNull(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key] === undefined) {
      return { ...acc, [key]: null };
    }
    return { ...acc, [key]: obj[key] };
  }, {});
}
