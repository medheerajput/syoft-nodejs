exports.errors = {
    badRequest: (message = 'Bad Request') => ({
      status: 400,
      message
    }),
    unauthorized: (message = 'Unauthorized') => ({
      status: 401,
      message
    }),
    forbidden: (message = 'Forbidden') => ({
      status: 403,
      message
    }),
    notFound: (message = 'Not Found') => ({
      status: 404,
      message
    }),
    internalServerError: (message = 'Internal Server Error') => ({
      status: 500,
      message
    }),
    customError: (status, message) => ({
      status,
      message
    })
  };
  

  