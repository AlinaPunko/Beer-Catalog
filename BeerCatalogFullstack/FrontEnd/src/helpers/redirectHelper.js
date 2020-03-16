import routing from 'constants/routing';

function redirectToHomePage(history) {
    history.push(routing.searchPage.url);
}

export default { redirectToHomePage };
