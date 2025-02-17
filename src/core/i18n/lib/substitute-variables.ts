export const VARIABLES_RX_VARS = /{([A-Z_-]+)}/g;
export const DEFAULT_LANGUAGE = 'ru';
export const SUPPORTED_LANG = ['ru', 'en'];
export const IS_CONSTANT_RX = /^TK_[A-Z_\d-]+$/;

export const substituteVariables = ({
    prevResult,
    constant,
    props,
    showMissingConstant = true,
}: {
    constant: string;
    prevResult: string;
    props?: Record<string, unknown>;
    showMissingConstant?: boolean;
}): string => {
    let result = prevResult;

    if (result === constant && showMissingConstant) {
        return constant;
    }

    if (!VARIABLES_RX_VARS.test(result)) {
        return result;
    }

    const vars = result.match(VARIABLES_RX_VARS);

    if (!vars) {
        return result;
    }

    vars.forEach((item) => {
        const variableName = item.replace(VARIABLES_RX_VARS, '$1').toLowerCase();

        if (!(props && props[variableName] !== undefined)) {
            return;
        }

        const propValue = props[variableName];

        result = result.replace(item, String(propValue));
    });

    return result;
};
