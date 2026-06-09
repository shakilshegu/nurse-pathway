export const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date(date));

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
