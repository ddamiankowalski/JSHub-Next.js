class JSHubError extends Error {
  systemMessage = 'GENERIC_JSHUB_ERROR';
  status = 500;

  constructor(message) {
    super(message);
  }
}

module.exports = JSHubError;