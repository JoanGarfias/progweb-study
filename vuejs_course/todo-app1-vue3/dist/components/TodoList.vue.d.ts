import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        type: __PropType<{
            id: number | string;
            text: string;
            completed: boolean;
        }[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: __PropType<{
            id: number | string;
            text: string;
            completed: boolean;
        }[]>;
        required: true;
    };
}>> & {
    onToggle?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
