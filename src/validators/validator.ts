const ageRangeValidator = (value: string) => {
  return value >= "18" && value <= "65";
};

export { ageRangeValidator };
