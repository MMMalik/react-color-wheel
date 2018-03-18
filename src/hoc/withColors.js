// @flow

import type {
    Hex,
    HexValues,
    Rgb,
    RgbValues,
    ParsedRgb
} from '../types';

import * as React from 'react';

type MixFn = (S: Rgb) => ParsedRgb;

type RgbFn = (S: Rgb) => RgbValues;

type SetColor = (S: Rgb) => void => void;

type State = { rgb: RgbValues };

export type OnColorSelect<T> = (S: State) => T;

type Props = {
    onColorSelect: OnColorSelect<*>
};

export type ColorUtils = {
    hex: HexValues,
    mix: MixFn,
    rgb: RgbValues,
    setColor: SetColor
};

export const INIT_HEX_VALUE: Hex = '00';

export const HEX: Array<Hex> =
    [...Array(256).keys()]
        .map(n => n.toString(16))
        .map(n => n.length < 2 ? '0' + n : n);

export const initHex = (c: Hex): Hex => c ? c : INIT_HEX_VALUE;

export const mix: MixFn = ({ r, g, b }) => `#${initHex(r)}${initHex(g)}${initHex(b)}`;

export const rgb: RgbFn = ({ r, g, b }) => ({ r, g, b, rgb: mix({ r, g, b }) });

export default (): (React.ComponentType<any> => React.ComponentType<any>) => (
    Component =>
        class WithColors extends React.Component<Props, State> {
            static defaultProps = {
                onColorSelect: () => {}
            };

            state = {
                rgb: rgb({ r: INIT_HEX_VALUE, g: INIT_HEX_VALUE, b: INIT_HEX_VALUE })
            };

            setColor: SetColor = ({ r, g, b }) =>
                () => {
                    this.setState({
                        rgb: rgb({
                            r: r ? r : this.state.rgb.r,
                            g: g ? g : this.state.rgb.g,
                            b: b ? b : this.state.rgb.b
                        })
                    }, () => this.props.onColorSelect({ ...this.state }));
                }

            render() {
                return (
                    <Component
                        {...this.props}
                        colors={{
                            HEX,
                            mix,
                            rgb: { ...this.state.rgb },
                            setColor: this.setColor
                        }}
                    />
                );
            }
        }
);
