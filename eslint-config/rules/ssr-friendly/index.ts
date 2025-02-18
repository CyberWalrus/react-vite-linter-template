import noDomGlobalsInConstructor from './no-dom-globals-in-constructor';
import noDomGlobalsInModuleScope from './no-dom-globals-in-module-scope';
import noDomGlobalsInReactCCRender from './no-dom-globals-in-react-cc-render';
import noDomGlobalsInReactFC from './no-dom-globals-in-react-fc';

export const ssrFriendlyRules = {
    'no-dom-globals-in-constructor': noDomGlobalsInConstructor,
    'no-dom-globals-in-module-scope': noDomGlobalsInModuleScope,
    'no-dom-globals-in-react-cc-render': noDomGlobalsInReactCCRender,
    'no-dom-globals-in-react-fc': noDomGlobalsInReactFC,
};
