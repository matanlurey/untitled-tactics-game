import { TileData } from '../../common/tile';
import './Grid.scss';

export type CellProps = TileData & {
  children?: JSX.Element | JSX.Element[];
  onSelect?: (tile: TileData, selected: boolean) => boolean;
};

/**
 * Represents an individual `{X, Y}` coordinate pair as a cell.
 *
 * @param props
 */
export function Cell(props: CellProps): JSX.Element {
  const onClick = (event: React.MouseEvent) => {
    const element = event.target as HTMLLIElement;
    const selected = element.classList.contains('selected');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (props.onSelect!(props, selected)) {
      element.classList.toggle('selected');
    }
  };
  return (
    <li className="cell" onClick={props.onSelect && onClick}>
      {props.children}
    </li>
  );
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
