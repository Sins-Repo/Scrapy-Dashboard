import { ISanitizer } from '@jupyterlab/apputils';
import { INumberingDictionary } from '../../utils/numbering_dictionary';
import { INumberedHeading } from '../../utils/headings';
/**
 * Processes an HTML element containing rendered Markdown and returns a list of headings.
 *
 * @private
 * @param node - HTML element
 * @param sanitizer - HTML sanitizer
 * @param dict - numbering dictionary
 * @param numbering - boolean indicating whether to enable numbering
 * @returns list of headings
 */
declare function getRenderedHeadings(node: HTMLElement, sanitizer: ISanitizer, dict: INumberingDictionary, numbering?: boolean): INumberedHeading[];
/**
 * Exports.
 */
export { getRenderedHeadings };
