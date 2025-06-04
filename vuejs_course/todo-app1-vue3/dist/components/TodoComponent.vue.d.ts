import type { PropType as __PropType } from 'vue';
export type ITodoItem = {
    id: number | string;
    text: string;
    completed: boolean;
};
declare const _sfc_main: import("vue").DefineComponent<{
    todos: {
        type: __PropType<ITodoItem[] | undefined>;
        required: false;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    todos: {
        type: __PropType<ITodoItem[] | undefined>;
        required: false;
        default: () => never[];
    };
}>>, {
    todos: ITodoItem[] | undefined;
}>;
export default _sfc_main;
