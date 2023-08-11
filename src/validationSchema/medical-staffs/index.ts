import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  profile_info: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
