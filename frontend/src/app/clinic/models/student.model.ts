abstract class StudentBase {
  id: string;
  name: string;
  date_of_birth: Date | string | null;
  gender: 'male' | 'female' | 'undefined';
  diagnosis: string;
  clinician_name: string;
  notes: string;
}

export class Student extends StudentBase {
  school: string;
}

export const gender_types = {MALE: 'male', FEMALE: 'female', UNDEFINED: 'undefined'}
