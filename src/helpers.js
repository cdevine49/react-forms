export const setClassName = (defaultClass, propClasses) => {
  if (!propClasses) {
    return defaultClass
  } else {
    return defaultClass + " " + propClasses
  }
}
