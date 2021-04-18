enum StatusType {
  'fail',
  'error',
}

class CreateError extends Error {
  public message!: string;
  public statusCode: number;
  public status: StatusType;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4')
      ? StatusType.fail
      : StatusType.error;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CreateError;
