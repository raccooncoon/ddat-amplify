/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type XmlMapperCreateFormInputValues = {
    serviceName?: string;
    fileName?: string;
    filePath?: string;
    mapperId?: string;
    mapperName?: string;
    mapperNameSpace?: string;
    mapperType?: string;
    mapperBody?: string;
};
export declare type XmlMapperCreateFormValidationValues = {
    serviceName?: ValidationFunction<string>;
    fileName?: ValidationFunction<string>;
    filePath?: ValidationFunction<string>;
    mapperId?: ValidationFunction<string>;
    mapperName?: ValidationFunction<string>;
    mapperNameSpace?: ValidationFunction<string>;
    mapperType?: ValidationFunction<string>;
    mapperBody?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type XmlMapperCreateFormOverridesProps = {
    XmlMapperCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceName?: PrimitiveOverrideProps<TextFieldProps>;
    fileName?: PrimitiveOverrideProps<TextFieldProps>;
    filePath?: PrimitiveOverrideProps<TextFieldProps>;
    mapperId?: PrimitiveOverrideProps<TextFieldProps>;
    mapperName?: PrimitiveOverrideProps<TextFieldProps>;
    mapperNameSpace?: PrimitiveOverrideProps<TextFieldProps>;
    mapperType?: PrimitiveOverrideProps<TextFieldProps>;
    mapperBody?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type XmlMapperCreateFormProps = React.PropsWithChildren<{
    overrides?: XmlMapperCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: XmlMapperCreateFormInputValues) => XmlMapperCreateFormInputValues;
    onSuccess?: (fields: XmlMapperCreateFormInputValues) => void;
    onError?: (fields: XmlMapperCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: XmlMapperCreateFormInputValues) => XmlMapperCreateFormInputValues;
    onValidate?: XmlMapperCreateFormValidationValues;
} & React.CSSProperties>;
export default function XmlMapperCreateForm(props: XmlMapperCreateFormProps): React.ReactElement;
