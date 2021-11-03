import { validate } from 'validate.js';

export const validateField = (rules, fieldName, value, dependencies) => {
  let fieldValidate = dependencies || {},
    fieldRules = {};
  if (value) {
    fieldValidate[fieldName] = value;
  }
  fieldRules[fieldName] = rules[fieldName] || {};
  const result = validate(fieldValidate, fieldRules);
  if (result) {
    return result[fieldName][0];
  }
  return null;
};