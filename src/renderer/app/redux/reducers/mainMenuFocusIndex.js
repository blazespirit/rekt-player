const mainMenuFocusIndex = (state = 0, action) => {
    if (action.type === 'CHANGE_MENU_FOCUS_INDEX') {
        return action.focusIndex;
    }
    else {
        return state;
    }
};

export default mainMenuFocusIndex;