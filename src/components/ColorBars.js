// @flow

import type { Colors } from '../hoc';
import type { Hex } from '../types';

import * as React from 'react';
import withColors from '../hoc';

type Props = {
    colors: Colors,
    barHeight: string
};

class ColorBars extends React.Component<Props> {
    static defaultProps = {
        barHeight: '15px'
    };

    bar = (c: Hex) => {
        const { colors, barHeight } = this.props;

        return (
            <div>
                {colors.HEX.map(val => (
                    <div
                        key={`${c}${val}`}
                        onClick={colors.setColor({ [c]: val })}
                        style={{
                            display: 'inline-block',
                            width: `${100 / colors.HEX.length}%`,
                            height: barHeight,
                            backgroundColor: colors.mix({ [c]: val })
                        }}
                    />
                ))}
            </div>
        );
    };

    result = () => {
        const { colors } = this.props;

        return (
            <React.Fragment>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: colors.rgb.rgb
                    }}
                />
                <div>{`hex: ${colors.rgb.rgb}`}</div>
            </React.Fragment>
        );
    };

    render() {
        return (
            <React.Fragment>
                {this.result()}
                {this.bar('r')}
                {this.bar('g')}
                {this.bar('b')}
            </React.Fragment>
        );
    }
}

export default withColors()(ColorBars);
