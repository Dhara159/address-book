import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

const validations = {
  firstName: { required, minLength: minLength(2) },
  lastName: { required, minLength: minLength(2) },
  email: { required, email },
  phoneNumber: {
    validNumber(phoneNumber) {
      return /^[6-9]\d{9}$/.test(
        phoneNumber
      );
    }
  },
  notes: { maxLength: maxLength(50) }
};

export default validations;