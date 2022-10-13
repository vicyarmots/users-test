export interface IForm {
  event: FormEventHandler;
  value: IValues;
  error: IErrors;
  submitSuccess?: boolean;
}

interface FormEventHandler {
  [key: string]: string;
}

interface IValues {
  [key: string]: string | number | boolean;
}

interface IErrors {
  [key: string]: string;
}
