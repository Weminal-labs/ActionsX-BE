export interface ActionError {
    message: string;
}

export interface LinkedAction {
    href: string;
    label: string;
    parameters?: [ActionParameter];
}
   
export interface ActionParameter {
    name: string;
    label?: string;
    required?: boolean;
}
export interface ActionGetResponse {
    icon: string;
    title: string;
    description: string;
    label: string;
    disabled?: boolean;
    links?: {
      actions: LinkedAction[];
    };
    error?: ActionError;
}

type Action = {
  pathPattern: string;
  apiPath: string;
};

export const ACTIONS_CORS_HEADERS: HeadersInit = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
    "Access-Control-Allow-Headers":
    "Content-Type, Authorization, Content-Encoding, Accept-Encoding",
    "Content-Type": "application/json",
  };
  
