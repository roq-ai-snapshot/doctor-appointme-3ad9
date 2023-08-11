import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  patient_info: yup.string().nullable(),
  medical_staff_id: yup.string().nullable(),
  insurance_provider_id: yup.string().nullable(),
});
