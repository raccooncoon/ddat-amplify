/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { XmlMapper } from "../models";
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
export declare type XmlMapperUpdateFormInputValues = {
    serviceName?: string;
    fileName?: string;
    filePath?: string;
    mapperId?: string;
    mapperName?: string;
    mapperNameSpace?: string;
    mapperType?: string;
    mapperBody?: string;
};
export declare type XmlMapperUpdateFormValidationValues = {
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
export declare type XmlMapperUpdateFormOverridesProps = {
    XmlMapperUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceName?: PrimitiveOverrideProps<TextFieldProps>;
    fileName?: PrimitiveOverrideProps<TextFieldProps>;
    filePath?: PrimitiveOverrideProps<TextFieldProps>;
    mapperId?: PrimitiveOverrideProps<TextFieldProps>;
    mapperName?: PrimitiveOverrideProps<TextFieldProps>;
    mapperNameSpace?: PrimitiveOverrideProps<TextFieldProps>;
    mapperType?: PrimitiveOverrideProps<TextFieldProps>;
    mapperBody?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type XmlMapperUpdateFormProps = React.PropsWithChildren<{
    overrides?: XmlMapperUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    xmlMapper?: XmlMapper;
    onSubmit?: (fields: XmlMapperUpdateFormInputValues) => XmlMapperUpdateFormInputValues;
    onSuccess?: (fields: XmlMapperUpdateFormInputValues) => void;
    onError?: (fields: XmlMapperUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: XmlMapperUpdateFormInputValues) => XmlMapperUpdateFormInputValues;
    onValidate?: XmlMapperUpdateFormValidationValues;
} & React.CSSProperties>;
export default function XmlMapperUpdateForm(props: XmlMapperUpdateFormProps): React.ReactElement;
