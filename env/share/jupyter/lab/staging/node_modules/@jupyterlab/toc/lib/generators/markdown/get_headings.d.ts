import { INumberingDictionary } from '../../utils/numbering_dictionary';
import { INumberedHeading } from '../../utils/headings';
/**
 * Returns a "click" handler.
 *
 * @private
 * @param line - line number
 * @returns "click" handler
 */
declare type onClickFactory = (line: number) => () => void;
/**
 * Parses a provided string and returns a list of headings.
 *
 * @private
 * @param text - input text
 * @param onClick - callback which returns a "click" handler
 * @param dict - numbering dictionary
 * @returns list of headings
 */
declare function getHeadings(text: string, onClick: onClickFactory, dict: INumberingDictionary): INumberedHeading[];
/**
 * Exports.
 */
export { getHeadings };
