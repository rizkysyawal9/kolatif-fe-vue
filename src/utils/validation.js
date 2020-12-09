const required = (propertyType) => {
  return (v) => (v && v.length > 0) || `You have to input ${propertyType}`
}

const minLength = (propertyType, minLength) => {
  return (v) =>
    (v && v.length >= minLength) ||
    `${propertyType} cannot be less than ${minLength} characters`
}

const maxLength = (propertyType, maxLength) => {
  return (v) =>
    (v && v.length <= maxLength) ||
    `${propertyType} cannot be more than ${maxLength} characters`
}

const emailFormat = () => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return (v) => (v && regex.test(v)) || 'You have to use a valid email address'
}

const numberFormat = () => {
  const regex = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/
  return (v) => (v && regex.test(v)) || 'You have to input a number'
}

const confirmPassword = (password) => {
  return (v) => (v && v === password) || `Your password does not match`
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
  numberFormat,
  confirmPassword,
}
