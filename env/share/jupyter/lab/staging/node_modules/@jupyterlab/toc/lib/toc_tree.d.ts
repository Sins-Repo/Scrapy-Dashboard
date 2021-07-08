import * as React from 'react';
import { Widget } from '@lumino/widgets';
import { IHeading } from './utils/headings';
import { TableOfContentsRegistry as Registry } from './registry';
/**
 * Interface describing component properties.
 *
 * @private
 */
interface IProperties extends React.Props<TOCTree> {
    /**
     * Display title.
     */
    title: string;
    /**
     * List of headings to render.
     */
    toc: IHeading[];
    /**
     * Toolbar.
     */
    toolbar: any;
    /**
     * Table of contents generator.
     */
    generator: Registry.IGenerator<Widget> | null;
    /**
     * Renders a heading item.
     *
     * @param item - heading
     * @returns rendered heading
     */
    itemRenderer: (item: IHeading) => JSX.Element | null;
}
/**
 * Interface describing component state.
 *
 * @private
 */
interface IState {
}
/**
 * React component for a table of contents tree.
 *
 * @private
 */
declare class TOCTree extends React.Component<IProperties, IState> {
    /**
     * Renders a table of contents tree.
     */
    render(): JSX.Element;
}
/**
 * Exports.
 */
export { TOCTree };
