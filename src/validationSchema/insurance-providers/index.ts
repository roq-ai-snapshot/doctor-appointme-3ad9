import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  insurance_info: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
