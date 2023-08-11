import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  appointment_info: yup.string().nullable(),
  healthcare_provider_id: yup.string().nullable(),
  medical_staff_id: yup.string().nullable(),
});
