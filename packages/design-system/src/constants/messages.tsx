export function createMessage(
  format: (...strArgs: any[]) => string,
  ...args: any[]
) {
  return format(...args);
}

export const ERROR_MESSAGE_NAME_EMPTY = () => `Please select a name`;

export const FORM_VALIDATION_INVALID_EMAIL = () =>
  `Please provide a valid email address`;

export const INVITE_USERS_VALIDATION_EMAIL_LIST = () =>
  `Invalid Email address(es) found`;

export const REMOVE = () => "Remove";

export const DISPLAY_IMAGE_UPLOAD_LABEL = () => "Upload Display Picture";

export const ADD_REACTION = () => "Add Reaction";

export const EMOJI = () => "Emoji";

// Showcase Carousel
export const NEXT = () => "NEXT";
export const BACK = () => "BACK";
export const SKIP = () => "SKIP";

export const LEARN_MORE = () => "Learn More";
