exports.success = {
    created: (message = 'Resource created successfully', data = {}) => ({
      status: 201,
      message,
      data
    }),
    ok: (message = 'Request successful', data = {}) => ({
      status: 200,
      message,
      data
    }),
    deleted: (message = 'Resource deleted successfully') => ({
      status: 200,
      message
    }),
    customSuccess: (status, message, data = {}) => ({
      status,
      message,
      data
    })
  };
  