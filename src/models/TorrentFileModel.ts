/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../helpers'
/**
 *
 * @export
 * @interface TorrentFileModel
 */
export interface TorrentFileModel {
    /**
     *
     * @type {string}
     * @memberof TorrentFileModel
     */
    name: string
    /**
     *
     * @type {string}
     * @memberof TorrentFileModel
     */
    path: string
    /**
     *
     * @type {string}
     * @memberof TorrentFileModel
     */
    type: string
    /**
     *
     * @type {number}
     * @memberof TorrentFileModel
     */
    length: number
    /**
     *
     * @type {string}
     * @memberof TorrentFileModel
     */
    stream: string
}

export function TorrentFileModelFromJSON(json: any): TorrentFileModel {
    return TorrentFileModelFromJSONTyped(json, false)
}

export function TorrentFileModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): TorrentFileModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        name: json['name'],
        path: json['path'],
        type: json['type'],
        length: json['length'],
        stream: json['stream'],
    }
}

export function TorrentFileModelToJSON(value?: TorrentFileModel | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        name: value.name,
        path: value.path,
        type: value.type,
        length: value.length,
        stream: value.stream,
    }
}