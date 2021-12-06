export class Diary {
  public Date: {
    Day: string;
    Date: string;
  };
  public Syllabus: Subject[];
}
export class Subject {
  public Name: string;
  public Homework: any;
  public Info: {
    State: number;
    Class: string;
    Teacher: string;
  };
}
