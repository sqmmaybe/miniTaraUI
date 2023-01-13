declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    size: {
        type: StringConstructor;
        Validator(value: string): boolean;
    };
}, {
    styleClass: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'is-plain': boolean;
        'is-round': boolean;
        'is-disabled': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    size: {
        type: StringConstructor;
        Validator(value: string): boolean;
    };
}>>, {
    plain: boolean;
    round: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
