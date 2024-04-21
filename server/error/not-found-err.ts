import { JSHubError } from './jshub-err';

export class NotFoundError extends JSHubError {
  systemMessage = 'NOT_FOUND_ERROR';
  status = 404;

  constructor(message: string) {
    super(message);
  }
}
