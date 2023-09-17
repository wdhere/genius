"use client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9578c327-efe3-485e-b0ed-161b31a34edc");
  }, []);

  return null;
};
