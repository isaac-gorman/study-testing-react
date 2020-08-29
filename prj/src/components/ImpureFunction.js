import React from "react";
import uuid from "uuid";

export const makeUser = (firstName, lastName) => {
  return {
    id: uuid,
    fullName: `${firstName} ${lastName}`,
  };
};
