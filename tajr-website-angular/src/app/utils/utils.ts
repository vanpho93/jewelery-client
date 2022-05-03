export const Util = {
  /**
   * return TRUE when value empty or null or undefined.
   * @param value value want to check.
   */
  isNullOrEmpty(value): boolean {
    return (!value || '' === value.toString().trim());
  },

  /**
   * return TRUE when value id not null, empty , undefined and exception when access error (Object).
   * @param value value want to check.
   */
  isNotNullOrEmpty(value): boolean {
    let result = false;
    try {
      return (!!value && !this.isNullOrEmpty(value));
    } catch (e) {
      result = false;
    }
    return result;
  },

  /**
   * return TRUE when value not null or empty or undefined. Use to check Object available or not
   * @param value value want to check.
   */
  isNotNull(value): boolean {
    return (!!value);
  },

  /**
   * return TRUE when value is null or empty or undefined. Use to check Object available or not
   * @param value value want to check.
   */
  isNull(value): boolean {
    return (!value);
  },
};
