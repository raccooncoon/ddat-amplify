/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { XmlMapper } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function XmlMapperCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    serviceName: "",
    fileName: "",
    filePath: "",
    mapperId: "",
    mapperName: "",
    mapperNameSpace: "",
    mapperType: "",
    mapperBody: "",
  };
  const [serviceName, setServiceName] = React.useState(
    initialValues.serviceName
  );
  const [fileName, setFileName] = React.useState(initialValues.fileName);
  const [filePath, setFilePath] = React.useState(initialValues.filePath);
  const [mapperId, setMapperId] = React.useState(initialValues.mapperId);
  const [mapperName, setMapperName] = React.useState(initialValues.mapperName);
  const [mapperNameSpace, setMapperNameSpace] = React.useState(
    initialValues.mapperNameSpace
  );
  const [mapperType, setMapperType] = React.useState(initialValues.mapperType);
  const [mapperBody, setMapperBody] = React.useState(initialValues.mapperBody);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setServiceName(initialValues.serviceName);
    setFileName(initialValues.fileName);
    setFilePath(initialValues.filePath);
    setMapperId(initialValues.mapperId);
    setMapperName(initialValues.mapperName);
    setMapperNameSpace(initialValues.mapperNameSpace);
    setMapperType(initialValues.mapperType);
    setMapperBody(initialValues.mapperBody);
    setErrors({});
  };
  const validations = {
    serviceName: [],
    fileName: [],
    filePath: [],
    mapperId: [],
    mapperName: [],
    mapperNameSpace: [],
    mapperType: [],
    mapperBody: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          serviceName,
          fileName,
          filePath,
          mapperId,
          mapperName,
          mapperNameSpace,
          mapperType,
          mapperBody,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new XmlMapper(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "XmlMapperCreateForm")}
      {...rest}
    >
      <TextField
        label="Service name"
        isRequired={false}
        isReadOnly={false}
        value={serviceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName: value,
              fileName,
              filePath,
              mapperId,
              mapperName,
              mapperNameSpace,
              mapperType,
              mapperBody,
            };
            const result = onChange(modelFields);
            value = result?.serviceName ?? value;
          }
          if (errors.serviceName?.hasError) {
            runValidationTasks("serviceName", value);
          }
          setServiceName(value);
        }}
        onBlur={() => runValidationTasks("serviceName", serviceName)}
        errorMessage={errors.serviceName?.errorMessage}
        hasError={errors.serviceName?.hasError}
        {...getOverrideProps(overrides, "serviceName")}
      ></TextField>
      <TextField
        label="File name"
        isRequired={false}
        isReadOnly={false}
        value={fileName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName,
              fileName: value,
              filePath,
              mapperId,
              mapperName,
              mapperNameSpace,
              mapperType,
              mapperBody,
            };
            const result = onChange(modelFields);
            value = result?.fileName ?? value;
          }
          if (errors.fileName?.hasError) {
            runValidationTasks("fileName", value);
          }
          setFileName(value);
        }}
        onBlur={() => runValidationTasks("fileName", fileName)}
        errorMessage={errors.fileName?.errorMessage}
        hasError={errors.fileName?.hasError}
        {...getOverrideProps(overrides, "fileName")}
      ></TextField>
      <TextField
        label="File path"
        isRequired={false}
        isReadOnly={false}
        value={filePath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName,
              fileName,
              filePath: value,
              mapperId,
              mapperName,
              mapperNameSpace,
              mapperType,
              mapperBody,
            };
            const result = onChange(modelFields);
            value = result?.filePath ?? value;
          }
          if (errors.filePath?.hasError) {
            runValidationTasks("filePath", value);
          }
          setFilePath(value);
        }}
        onBlur={() => runValidationTasks("filePath", filePath)}
        errorMessage={errors.filePath?.errorMessage}
        hasError={errors.filePath?.hasError}
        {...getOverrideProps(overrides, "filePath")}
      ></TextField>
      <TextField
        label="Mapper id"
        isRequired={false}
        isReadOnly={false}
        value={mapperId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName,
              fileName,
              filePath,
              mapperId: value,
              mapperName,
              mapperNameSpace,
              mapperType,
              mapperBody,
            };
            const result = onChange(modelFields);
            value = result?.mapperId ?? value;
          }
          if (errors.mapperId?.hasError) {
            runValidationTasks("mapperId", value);
          }
          setMapperId(value);
        }}
        onBlur={() => runValidationTasks("mapperId", mapperId)}
        errorMessage={errors.mapperId?.errorMessage}
        hasError={errors.mapperId?.hasError}
        {...getOverrideProps(overrides, "mapperId")}
      ></TextField>
      <TextField
        label="Mapper name"
        isRequired={false}
        isReadOnly={false}
        value={mapperName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName,
              fileName,
              filePath,
              mapperId,
              mapperName: value,
              mapperNameSpace,
              mapperType,
              mapperBody,
            };
            const result = onChange(modelFields);
            value = result?.mapperName ?? value;
          }
          if (errors.mapperName?.hasError) {
            runValidationTasks("mapperName", value);
          }
          setMapperName(value);
        }}
        onBlur={() => runValidationTasks("mapperName", mapperName)}
        errorMessage={errors.mapperName?.errorMessage}
        hasError={errors.mapperName?.hasError}
        {...getOverrideProps(overrides, "mapperName")}
      ></TextField>
      <TextField
        label="Mapper name space"
        isRequired={false}
        isReadOnly={false}
        value={mapperNameSpace}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName,
              fileName,
              filePath,
              mapperId,
              mapperName,
              mapperNameSpace: value,
              mapperType,
              mapperBody,
            };
            const result = onChange(modelFields);
            value = result?.mapperNameSpace ?? value;
          }
          if (errors.mapperNameSpace?.hasError) {
            runValidationTasks("mapperNameSpace", value);
          }
          setMapperNameSpace(value);
        }}
        onBlur={() => runValidationTasks("mapperNameSpace", mapperNameSpace)}
        errorMessage={errors.mapperNameSpace?.errorMessage}
        hasError={errors.mapperNameSpace?.hasError}
        {...getOverrideProps(overrides, "mapperNameSpace")}
      ></TextField>
      <TextField
        label="Mapper type"
        isRequired={false}
        isReadOnly={false}
        value={mapperType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName,
              fileName,
              filePath,
              mapperId,
              mapperName,
              mapperNameSpace,
              mapperType: value,
              mapperBody,
            };
            const result = onChange(modelFields);
            value = result?.mapperType ?? value;
          }
          if (errors.mapperType?.hasError) {
            runValidationTasks("mapperType", value);
          }
          setMapperType(value);
        }}
        onBlur={() => runValidationTasks("mapperType", mapperType)}
        errorMessage={errors.mapperType?.errorMessage}
        hasError={errors.mapperType?.hasError}
        {...getOverrideProps(overrides, "mapperType")}
      ></TextField>
      <TextField
        label="Mapper body"
        isRequired={false}
        isReadOnly={false}
        value={mapperBody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName,
              fileName,
              filePath,
              mapperId,
              mapperName,
              mapperNameSpace,
              mapperType,
              mapperBody: value,
            };
            const result = onChange(modelFields);
            value = result?.mapperBody ?? value;
          }
          if (errors.mapperBody?.hasError) {
            runValidationTasks("mapperBody", value);
          }
          setMapperBody(value);
        }}
        onBlur={() => runValidationTasks("mapperBody", mapperBody)}
        errorMessage={errors.mapperBody?.errorMessage}
        hasError={errors.mapperBody?.hasError}
        {...getOverrideProps(overrides, "mapperBody")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
