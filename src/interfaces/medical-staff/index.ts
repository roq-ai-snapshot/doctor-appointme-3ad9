import { AppointmentInterface } from 'interfaces/appointment';
import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalStaffInterface {
  id?: string;
  user_id?: string;
  profile_info?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  patient?: PatientInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    patient?: number;
  };
}

export interface MedicalStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  profile_info?: string;
}
