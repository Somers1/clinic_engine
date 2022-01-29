export const school_types = {PRE_SCHOOL: 'pre school', PRIMARY_SCHOOL: 'primary school', HIGH_SCHOOL: 'high school'}

abstract class SchoolBase {
  id: string;
  name: string;
  contact_email: string;
  contact_phone: string;
  contact_name: string;
  address: string;
  school_type: 'pre school' | 'primary school' | 'high school';
}

export class School extends SchoolBase {
  user: string;
  clinic: string;
}

