export class ApiError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors: any[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static notFound() {
    return new ApiError(404, 'User not found!');
  }

  static badRequest(message: string, errors: any[] = []) {
    return new ApiError(400, message, errors);
  }
}
