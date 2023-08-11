import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  profile_info: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
