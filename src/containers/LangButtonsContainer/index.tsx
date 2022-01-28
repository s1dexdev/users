import { MouseEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../redux/locale/action';
import { LangButtons } from '../../components';

export const LangButtonsContainer = () => {
    const dispatch = useDispatch();

    const changeLanguage = useCallback(
        (event: MouseEvent) => {
            const { name } = event.currentTarget as HTMLButtonElement;

            dispatch(setLocale(name));
        },
        [dispatch],
    );

    return <LangButtons onChangeLanguage={changeLanguage} />;
};
