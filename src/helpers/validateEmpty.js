const validate = (form, required) => {
  const next = {};

  required.forEach((e) => {
    if (!form[e].trim()) next[e] = "This field is required";
  });

  return next;
};

export default validate;