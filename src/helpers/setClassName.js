const setClassName = (classArray) => {
  const filtered =  classArray.filter((argument) => argument);
  if (filtered.length > 0) {
    return filtered.join(" ");
  }
}

export default setClassName;