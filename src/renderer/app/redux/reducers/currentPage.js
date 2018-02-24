const currentPage = (state = 'MAIN_MENU', action) => {
    if (action.type === 'CHANGE_PAGE') {
        return action.page;
    }
    else {
        return state;
    }
};

export default currentPage;