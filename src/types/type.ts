export interface Resume {
  resumeID : string;
  title : string;
  questionsCount : number;
}

export interface QuestionAnswer {
  resumeID : string;
  question : string;
  answer : string;
  createdAt : Date;
  keywords : string[];
}