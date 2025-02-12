/**
 * On iOS the keyboard covers the input fields on the bottom of the view. This component moves the view up with the
 * keyboard allowing the user to see what they are typing.
 */
import _ from 'underscore';
import React from 'react';
import ReactNativeKeyboardSpacer from './KeyboardSpacer';
import withWindowDimensions, {windowDimensionsPropTypes} from '../withWindowDimensions';

const propTypes = {
    ...windowDimensionsPropTypes,
};

const KeyboardSpacer = (props) => {
    /**
     * Checks to see if the iOS device has safe areas or not
     *
     * @param {Number} windowWidth
     * @param {Number} windowHeight
     * @returns {Boolean}
     */
    function hasSafeAreas(windowWidth, windowHeight) {
        const heightsIphonesWithNotches = [812, 896, 844, 926];
        return _.contains(heightsIphonesWithNotches, windowHeight) || _.contains(heightsIphonesWithNotches, windowWidth);
    }

    return (
        <ReactNativeKeyboardSpacer topSpacing={hasSafeAreas(props.windowWidth, props.windowHeight) ? -30 : 0} />
    );
};

KeyboardSpacer.propTypes = propTypes;
KeyboardSpacer.displayName = 'KeyboardSpacer';
export default withWindowDimensions(KeyboardSpacer);
