/* tslint:disable */
export function lci_eval(arg0: string): string;

export function image_to_string(arg0: Uint8Array): string;

export function insult(): string;

export function nix_parse(arg0: string): string;

export class MoveResult {
success: boolean
free(): void;
 from(): string;

 to(): string;

}
export class ChessTerm {
constructor(...args: any[]);
free(): void;
static  new(arg0: any): ChessTerm;

 draw(): void;

 command(arg0: string): void;

}
export class CanMove {
illegal: boolean
free(): void;
 check(): string;

}
export class ChessBoard {
constructor(...args: any[]);
free(): void;
static  new(): ChessBoard;

 can_move(arg0: string, arg1: string): CanMove;

 get_move(): MoveResult;

}