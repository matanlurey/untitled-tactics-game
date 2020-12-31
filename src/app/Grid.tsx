import './Grid.scss';

export interface HexProps {
  children: JSX.Element | undefined;
}

export function Hex(props: HexProps): JSX.Element {
  return <li className="hex">{props.children}</li>;
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
