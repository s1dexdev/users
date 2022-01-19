import i18next from 'i18next';
import { format } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';

type DateType = number | Date;

export const parseDate = (date: DateType, formatStr = 'PP') => {
    const locales: Record<string, Locale> = { enUS, ru };

    return format(date, formatStr, {
        locale: locales[i18next.language],
    });
};
