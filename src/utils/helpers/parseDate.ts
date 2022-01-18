import { format } from 'date-fns';

type DateType = number | Date;

export const parseDate = (date: DateType) => format(date, 'PP');
