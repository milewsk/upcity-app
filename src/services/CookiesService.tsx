import React, { Fragment, useEffect } from "react";
import { JsonObjectExpression } from "typescript";
import IResponse from "../interfaces/IResponse";
import Cookies from "universal-cookie";

const CookieService = {
  cookies: new Cookies(),

  GetCookie: (name: string, options?: object) => {},

  GetAllCookies: () => {},

  SetCookie: (name: string, value: string | object, options?: object) => {},
};

export default CookieService;
