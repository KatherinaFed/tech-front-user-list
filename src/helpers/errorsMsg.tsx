import React from 'react';

function errorsMsg(
  errorName: string | undefined,
  touchedName: boolean | undefined
): JSX.Element {
  return errorName && touchedName ? (
    <div className="error_msg">{errorName}</div>
  ) : (
    <div className="error_msg">{''}</div>
  );
}

export default errorsMsg;
