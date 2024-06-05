export interface ITask {
  id: string;
  title: string;
  tasks?: Array<Object>;
  createdDate: Date;
  dueDate: Date;
  status?: string;
  tags?: Array<string>;
}
