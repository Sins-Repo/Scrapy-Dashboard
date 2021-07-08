import { INotebookHeading } from '../../utils/headings';
/**
 * Appends a collapsible notebook heading to a list of headings.
 *
 * @private
 * @param headings - list of notebook headings
 * @param heading - rendered heading
 * @param prev - previous heading
 * @param collapseLevel - collapse level
 * @param tags - filter tags
 * @param collapsed - boolean indicating whether a heading is collapsed
 * @returns result tuple
 */
declare function appendCollapsibleHeading(headings: INotebookHeading[], heading: INotebookHeading, prev: INotebookHeading | null, collapseLevel: number, tags: string[], collapsed: boolean): [INotebookHeading[], INotebookHeading | null, number];
/**
 * Exports.
 */
export { appendCollapsibleHeading };
