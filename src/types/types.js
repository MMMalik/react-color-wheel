export type Hex = string;

export type HexValues = Array<Hex>;

export type Rgb = {
    r?: Hex,
    g?: Hex,
    b?: Hex
};

export type ParsedRgb = string;

export type RgbValues = Rgb & {
    rgb: ParsedRgb
};
