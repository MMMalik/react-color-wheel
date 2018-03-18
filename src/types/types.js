export type HexValue = string;

export type HexValues = Array<HexValue>;

export type HexInfo = {
    value: HexValue,
    i: number
};

export type Rgb = {
    r?: HexInfo,
    g?: HexInfo,
    b?: HexInfo
};

export type ParsedRgb = string;

export type RgbValues = Rgb & {
    rgb: ParsedRgb
};
