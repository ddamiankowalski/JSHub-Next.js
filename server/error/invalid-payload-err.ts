import { JSHubError } from './jshub-err';

export class InvalidPayloadError extends JSHubError {
  systemMessage = 'INVALID_PAYLOAD';
  status = 400;

  constructor(message: string = '') {
    super(message);
  }
}
