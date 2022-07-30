export interface IResponse {
  Message: string;
  Status: number;
  ReturnData: object | null;
}

export interface RegisterData {
  Username: string;
  Password: string;
  ImgFile: string | null;
  BirthDate: Date;
  FirstName: string;
  Surname: string;
}
