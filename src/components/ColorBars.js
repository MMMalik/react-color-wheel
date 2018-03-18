// @flow

import type { Colors } from '../hoc';
import type { HexValue } from '../types';

import * as React from 'react';
import withColors from '../hoc';

type Props = { colors: Colors };

class ColorBars extends React.Component<Props> {
    handleChange = (c: HexValue) =>
        event => {
            const { colors: { setColor, HEX } } = this.props;
            setColor({ [c]: { value: HEX[event.target.value], i: event.target.value } })();
        };

    _bar = (c: HexValue) => {
        const { colors: { HEX, mix, rgb } } = this.props;

        return (
            <input
                title={mix({ [c]: { ...rgb[c] } })}
                className={`color-picker color-picker-${c}`}
                onChange={this.handleChange(c)}
                type="range"
                min={0}
                max={HEX.length - 1}
                value={rgb[c].i}
            />
        );
    }

    result = () => {
        const { colors: { rgb } } = this.props;

        return (
            <React.Fragment>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: rgb.rgb
                    }}
                />
                <div>{`hex: ${rgb.rgb}`}</div>
            </React.Fragment>
        );
    };

    render() {
        return (
            <React.Fragment>
                {this.result()}
                {this._bar('r')}
                {this._bar('g')}
                {this._bar('b')}
            </React.Fragment>
        );
    }
}

export default withColors()(ColorBars);
