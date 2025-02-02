/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * a single table column
 * @export
 * @interface Column
 */
export interface Column {
    /**
     *
     * @type {string}
     * @memberof Column
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof Column
     */
    editable: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Column
     */
    optional: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Column
     */
    hidden: boolean;
    /**
     *
     * @type {any}
     * @memberof Column
     */
    dtype: any | null;
    /**
     *
     * @type {Array<any>}
     * @memberof Column
     */
    values: Array<any>;
    /**
     *
     * @type {string}
     * @memberof Column
     */
    description: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof Column
     */
    tags: Array<string> | null;
}

/**
 * Check if a given object implements the Column interface.
 */
export function instanceOfColumn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && 'name' in value;
    isInstance = isInstance && 'editable' in value;
    isInstance = isInstance && 'optional' in value;
    isInstance = isInstance && 'hidden' in value;
    isInstance = isInstance && 'dtype' in value;
    isInstance = isInstance && 'values' in value;
    isInstance = isInstance && 'description' in value;
    isInstance = isInstance && 'tags' in value;

    return isInstance;
}

export function ColumnFromJSON(json: any): Column {
    return ColumnFromJSONTyped(json, false);
}

export function ColumnFromJSONTyped(json: any, ignoreDiscriminator: boolean): Column {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json['name'],
        editable: json['editable'],
        optional: json['optional'],
        hidden: json['hidden'],
        dtype: json['dtype'],
        values: json['values'],
        description: json['description'],
        tags: json['tags'],
    };
}

export function ColumnToJSON(value?: Column | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        editable: value.editable,
        optional: value.optional,
        hidden: value.hidden,
        dtype: value.dtype,
        values: value.values,
        description: value.description,
        tags: value.tags,
    };
}
