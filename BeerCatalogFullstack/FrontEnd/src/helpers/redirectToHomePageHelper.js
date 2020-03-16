import routing from 'constants/routing';

function redirect(history) {
    history.push(routing.searchPage.url);
}

export default { redirect };
