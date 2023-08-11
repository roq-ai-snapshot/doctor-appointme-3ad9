import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { MedicalStaffInterface } from 'interfaces/medical-staff';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  healthcare_provider_id?: string;
  medical_staff_id?: string;
  appointment_info?: string;
  created_at?: any;
  updated_at?: any;

  healthcare_provider?: HealthcareProviderInterface;
  medical_staff?: MedicalStaffInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  healthcare_provider_id?: string;
  medical_staff_id?: string;
  appointment_info?: string;
}
