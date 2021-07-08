import { INotebookHeading } from '../../utils/headings';
/**
 * Appends a Markdown notebook heading to a list of headings.
 *
 * @private
 * @param headings - list of notebook headings
 * @param heading - rendered heading
 * @param prev - previous heading
 * @param collapseLevel - collapse level
 * @param tags - filter tags
 * @param collapsed - boolean indicating whether a heading is collapsed
 * @param showMarkdown - boolean indicating whether to show Markdown previews
 * @returns result tuple
 */
declare function appendMarkdownHeading(heading: INotebookHeading | undefined, headings: INotebookHeading[], prev: INotebookHeading | null, collapseLevel: number, tags: string[], collapsed: boolean, showMarkdown: boolean): [INotebookHeading[], INotebookHeading | null, number];
/**
 * Exports.
 */
export { appendMarkdownHeading };
