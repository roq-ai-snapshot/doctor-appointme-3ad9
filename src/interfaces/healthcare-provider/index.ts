import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  user_id?: string;
  profile_info?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
  };
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  profile_info?: string;
}
