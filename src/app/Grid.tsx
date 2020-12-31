import './Grid.scss';

export interface CellProps {
  children: JSX.Element | JSX.Element[] | undefined;
}

export function Cell(props: CellProps): JSX.Element {
  return <li className="cell">{props.children}</li>;
}

export interface RowProps {
  children: JSX.Element | JSX.Element[];
}

export function Row(props: RowProps): JSX.Element {
  return <ul className="row">{props.children}</ul>;
}

export interface GridProps {
  children: JSX.Element | JSX.Element[];
}

export function Grid(props: GridProps): JSX.Element {
  return <ul className="grid">{props.children}</ul>;
}
