import { ExtractPropTypes } from "vue";
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
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
};
export declare type ButtonType = ExtractPropTypes<typeof buttonProps>;
