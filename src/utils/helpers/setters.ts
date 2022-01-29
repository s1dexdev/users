type SetPayload = <T, P>(state: T, { payload }: { payload: P }) => P;

const setTrue = () => true;
const setFalse = () => false;
const setNull = () => null;

const setPayload: SetPayload = (state, { payload }) => payload;

export const setters = { setTrue, setFalse, setNull, setPayload };
