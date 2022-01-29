abstract class StudentBase {
  id:string;
  grade:string;
  name:string;
  date_of_birth:Date;
  gender: 'male' | 'female' | 'undefined';
  diagnosis:string;
  clinician_name:string;
  notes:string;
}
export class Student extends StudentBase {
  school:string;
}
