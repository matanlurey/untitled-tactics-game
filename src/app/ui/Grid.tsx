import './Grid.scss';

export interface CellProps {
  children?: JSX.Element | JSX.Element[];
}

/**
 * Represents an individual `{X, Y}` coordinate pair as a cell.
 *
 * @param props
 */
export function Cell(props: CellProps): JSX.Element {
  return <li className="cell">{props.children}</li>;
}

export interface RowProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Represents a row of @see {Cell} components.
 *
 * @param props
 */
export function Row(props: RowProps): JSX.Element {
  return <ul className="row">{props.children}</ul>;
}

export interface GridProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Represents a grid of rows/cells (i.e. used as a map or table).
 *
 * @param props
 */
export function Grid(props: GridProps): JSX.Element {
  return <ul className="grid">{props.children}</ul>;
}
