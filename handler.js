'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Função lambda executada com sucesso!',
        input: event,
      },
      null,
      2
    ),
  };
};
