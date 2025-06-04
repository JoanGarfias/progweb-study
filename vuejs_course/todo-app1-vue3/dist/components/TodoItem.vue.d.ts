import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string | number>;
        required: true;
    };
    text: {
        type: __PropType<string>;
        required: true;
    };
    completed: {
        type: __PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string | number>;
        required: true;
    };
    text: {
        type: __PropType<string>;
        required: true;
    };
    completed: {
        type: __PropType<boolean>;
        required: true;
    };
}>> & {
    onToggle?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
