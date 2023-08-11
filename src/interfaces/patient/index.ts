import { MedicalStaffInterface } from 'interfaces/medical-staff';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  medical_staff_id?: string;
  insurance_provider_id?: string;
  patient_info?: string;
  created_at?: any;
  updated_at?: any;

  medical_staff?: MedicalStaffInterface;
  insurance_provider?: InsuranceProviderInterface;
  _count?: {};
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  medical_staff_id?: string;
  insurance_provider_id?: string;
  patient_info?: string;
}
